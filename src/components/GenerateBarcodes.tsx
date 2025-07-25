import { useState, useEffect, type SetStateAction, type Dispatch } from "react";
import { Checkbox } from "./Checkbox";
import { Range } from "./Range";
import { Radios } from "./Radios";
import { Barcode } from "./Barcode";
import { v4 as uuidv4 } from "uuid";
import wordlist from "../data/eff_large_wordlist.json";

function PassphraseOptions({
  numberOfBarcodes,
  setBarcodes,
}: {
  numberOfBarcodes: number;
  setBarcodes: Dispatch<SetStateAction<string[]>>;
}) {
  const [capitalize, setCapitalize] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [numberOfWords, setNumberOfWords] = useState(5);

  const rollDice = () => {
    return (window.crypto.getRandomValues(new Uint32Array(1))[0] % 6) + 1;
  };

  const getWord: () => string | undefined = () => {
    let id = "";
    for (let i = 0; i < 5; i++) {
      id += rollDice().toString();
    }
    const wordObj = wordlist.find((word) => word.id === Number(id));
    return wordObj?.word;
  };

  const generatePassphrase = (
    capitalize: boolean,
    includeNumber: boolean,
    numberOfWords: number,
  ) => {
    let words: string[] = [];
    for (let i = 0; i < numberOfWords; i++) {
      words.push(getWord() || "");
    }
    if (capitalize) {
      words = words.map((word) => word[0].toUpperCase() + word.slice(1));
    }
    const addNumberConditionally = (words: string[]): string[] => {
      if (!includeNumber) return words;
      const arrayCopy = [...words];
      const stringIndex =
        window.crypto.getRandomValues(new Uint32Array(1))[0] % arrayCopy.length;
      const randomDigit =
        window.crypto.getRandomValues(new Uint8Array(1))[0] % 10;
      arrayCopy[stringIndex] += randomDigit.toString();
      return arrayCopy;
    };
    const passphrase = addNumberConditionally(words).join("-");
    return passphrase;
  };

  useEffect(() => {
    let newBarcodes: string[] = [];
    for (let i = 0; i < numberOfBarcodes; i++) {
      newBarcodes.push(
        generatePassphrase(capitalize, includeNumber, numberOfWords),
      );
    }
    setBarcodes(newBarcodes);
  }, [numberOfBarcodes, capitalize, includeNumber, numberOfWords]);

  return (
    <div>
      <Checkbox
        label="Capitalize"
        checked={capitalize}
        onChange={setCapitalize}
      />
      <Checkbox
        label="Include number"
        checked={includeNumber}
        onChange={setIncludeNumber}
      />
      <div>
        <Range
          label="# of words"
          min={5}
          max={20}
          value={numberOfWords}
          onChange={setNumberOfWords}
        />
      </div>
    </div>
  );
}

function PasswordOptions({
  numberOfBarcodes,
  setBarcodes,
}: {
  numberOfBarcodes: number;
  setBarcodes: Dispatch<SetStateAction<string[]>>;
}) {
  const [capitalAlpha, setCapitalAlpha] = useState(true);
  const [lowercaseAlpha, setLowercaseAlpha] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [numberOfCharacters, setNumberOfCharacters] = useState(12);

  const generatePassword = (
    capitalAlpha: boolean,
    lowercaseAlpha: boolean,
    numbers: boolean,
    specialCharacters: boolean,
    numberOfCharacters: number,
  ) => {
    let chars = "";
    if (lowercaseAlpha) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (capitalAlpha) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      chars += "0123456789";
    }
    if (specialCharacters) {
      chars += "!@#$%^&*";
    }
    let password = "";
    for (let i = 0; i < numberOfCharacters; i++) {
      const randomIndex: number =
        window.crypto.getRandomValues(new Uint8Array(1))[0] % chars.length;
      password += chars.charAt(randomIndex);
    }
    return password;
  };

  useEffect(() => {
    let newBarcodes: string[] = [];
    for (let i = 0; i < numberOfBarcodes; i++) {
      newBarcodes.push(
        generatePassword(
          capitalAlpha,
          lowercaseAlpha,
          numbers,
          specialCharacters,
          numberOfCharacters,
        ),
      );
    }
    setBarcodes(newBarcodes);
  }, [
    numberOfBarcodes,
    capitalAlpha,
    lowercaseAlpha,
    numbers,
    specialCharacters,
    numberOfCharacters,
  ]);

  return (
    <div>
      <Checkbox label="A-Z" checked={capitalAlpha} onChange={setCapitalAlpha} />
      <Checkbox
        label="a-z"
        checked={lowercaseAlpha}
        onChange={setLowercaseAlpha}
      />
      <Checkbox label="Numbers" checked={numbers} onChange={setNumbers} />
      <Checkbox
        label="!@#$%^&*"
        checked={specialCharacters}
        onChange={setSpecialCharacters}
      />
      <div>
        <Range
          label="Number of characters"
          min={12}
          max={128}
          value={numberOfCharacters}
          onChange={setNumberOfCharacters}
        />
      </div>
    </div>
  );
}

export function GenerateBarcodes({ showSecrets }: { showSecrets: boolean }) {
  const [numberOfBarcodes, setNumberOfBarcodes] = useState(1);
  const [secretMode, setSecretMode] = useState("password");
  const [barcodes, setBarcodes] = useState(["wowee"]);
  const secretModeOptions = [
    { label: "Password", value: "password" },
    { label: "Passphrase", value: "passphrase" },
  ];

  return (
    <div>
      <h3 className="no-print">secret gen options</h3>
      <div style={{ display: "flex" }}>
        <div className="no-print">
          <Radios
            name="secretMode"
            options={secretModeOptions}
            selectedValue={secretMode}
            onChange={setSecretMode}
          />
          <Range
            label="# of barcodes"
            min={1}
            max={20}
            value={numberOfBarcodes}
            onChange={setNumberOfBarcodes}
          />
          {secretMode === "passphrase" ? (
            <PassphraseOptions
              numberOfBarcodes={numberOfBarcodes}
              setBarcodes={setBarcodes}
            />
          ) : (
            <PasswordOptions
              numberOfBarcodes={numberOfBarcodes}
              setBarcodes={setBarcodes}
            />
          )}
        </div>
      </div>

      {barcodes.map((val) => {
        const uuid = uuidv4();
        return (
          <Barcode
            key={uuid}
            uuid={uuid}
            value={val}
            showSecrets={showSecrets}
          />
        );
      })}
    </div>
  );
}
