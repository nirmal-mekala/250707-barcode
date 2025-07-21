import type { Dispatch, SetStateAction } from "react";

export function Checkbox({
  label,
  checked,
  onChange,
}: {label: string, checked: boolean, onChange: Dispatch<SetStateAction<boolean>>}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
