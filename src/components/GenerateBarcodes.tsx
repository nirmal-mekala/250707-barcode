import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Range } from "./Range";
import { Radios } from "./Radios";
import { Barcode } from "./Barcode";

function Passphrases({ setBarcodes }) {
  const [capitalize, setCapitalize] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [numberOfWords, setNumberOfWords] = useState(3);

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
          label="Number of words"
          min={3}
          max={20}
          value={numberOfWords}
          onChange={setNumberOfWords}
        />
      </div>
      <p>Passphrases</p>
    </div>
  );
}

// TODO form element
// TODO uniqId
function Passwords({ barcodes, setBarcodes }) {
  const [capitalAlpha, setCapitalAlpha] = useState(true);
  const [lowercaseAlpha, setLowercaseAlpha] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [numberOfCharacters, setNumberOfCharacters] = useState(15);

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
          min={5}
          max={128}
          value={numberOfCharacters}
          onChange={setNumberOfCharacters}
        />
      </div>
    </div>
  );
}

export function GenerateBarcodes({ showSecrets }) {
  // TODO numberOfBarcodes should determine barcodes.length
  const [numberOfBarcodes, setNumberOfBarcodes] = useState(1);
  const [secretMode, setSecretMode] = useState("password");
  const [barcodes, setBarcodes] = useState(["wowee"]);

  const secretModeOptions = [
    { label: "Password", value: "password" },
    { label: "Passphrase", value: "passphrase" },
  ];

  // TODO store state locally to PasswordParams and just render barcodes within each… in stead of prop drilling
  // --> passwords and passphrases are going to have v different logic
  // --> move to just "Passwords" and "Passphrases" instaed of …Params
  return (
    <div>
      <div>
        <Radios
          name="secretMode"
          options={secretModeOptions}
          selectedValue={secretMode}
          onChange={setSecretMode}
        />
      </div>
      <div>
        <Range
          label="Number of barcodes"
          min={1}
          max={20}
          value={numberOfBarcodes}
          onChange={setNumberOfBarcodes}
        />
      </div>
      {secretMode === "passphrase" ? (
        <Passphrases
          numberOfBarcodes={numberOfBarcodes}
          setBarcodes={setBarcodes}
        />
      ) : (
        <Passwords
          numberOfBarcodes={numberOfBarcodes}
          setBarcodes={setBarcodes}
        />
      )}
      {barcodes.map((val, index) => {
        return <Barcode key={index} value={val} showSecrets={showSecrets} />;
      })}
    </div>
  );
}
