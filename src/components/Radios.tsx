export function Radios({ name, options, selectedValue, onChange }) {
  return (
    <div role="radiogroup" aria-labelledby={name}>
      {options.map((option) => (
        <label key={option.value} style={{ marginRight: "10px" }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            style={{ marginRight: "10px" }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

