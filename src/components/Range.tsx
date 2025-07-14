

export default function Range({ min, max, value, onChange, label }) {
  return (
    <label>
      {label} - {value}
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
    />
    </label>

  );
}
