import type { Dispatch, SetStateAction } from "react";

export function Range({
  min,
  max,
  value,
  onChange,
  label,
}: {
  min: number;
  max: number;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  label: string;
}) {
  return (
    <div>
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
    </div>
  );
}
