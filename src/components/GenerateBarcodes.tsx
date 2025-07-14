

export function GenerateBarcodes() {
  const [capitalAlpha, setCapitalAlpha] = useState(true);
  const [lowercaseAlpha, setLowercaseAlpha] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [numberOfBarcodes, setNumberOfBarcodes] = useState(1);
  const [numberOfCharacters, setNumberOfCharacters] = useState(15);

  return (
    <div>
      <Checkbox label="A-Z" checked={capitalAlpha} onChange={setCapitalAlpha} />
      <Checkbox label="a-z" checked={lowercaseAlpha} onChange={setLowercaseAlpha} />
      <Checkbox label="Numbers" checked={numbers} onChange={setNumbers} />
      <Checkbox label="!@#$%^&*" checked={specialCharacters} onChange={setSpecialCharacters} />
      <div>
      <Range label="Number of barcodes" min={1} max={20} value={numberOfBarcodes} onChange={setNumberOfBarcodes} />
</div>
      <div>
      <Range label="Number of characters" min={5} max={128} value={numberOfCharacters} onChange={setNumberOfCharacters} />
</div>
    </div>
  );
}
