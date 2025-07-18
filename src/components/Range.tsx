
export function Range({ min, max, value, onChange, label }) {
  return (
    <label>
      {label} - {value}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        style={{ marginLeft: '10px' }}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </label>

  );
}
