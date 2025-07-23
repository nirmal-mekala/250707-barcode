import type { Dispatch, KeyboardEvent, SetStateAction } from "react";

export function TabSection({
  mode,
  setMode,
}: {
  mode: "input" | "generator";
  setMode: Dispatch<SetStateAction<"input" | "generator">>;
}) {
  const tabs: { id: "input" | "generator"; label: string }[] = [
    { id: "input", label: "Input Secret" },
    { id: "generator", label: "Generate Secrets" },
  ];

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (e.key === "ArrowRight") {
      setMode(tabs[(index + 1) % tabs.length].id);
    } else if (e.key === "ArrowLeft") {
      setMode(tabs[(index - 1 + tabs.length) % tabs.length].id);
    }
  };

  return (
    <div style={{ width: "100%", marginBottom: "1rem" }} className="no-print">
      <div
        role="tablist"
        aria-label="Mode Tabs"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        {tabs.map((tab, index) => {
          const isSelected = mode === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              type="button"
              onClick={() => setMode(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                flex: 1,
                padding: "1em",
                cursor: "pointer",
                color: isSelected ? "var(--fg-color-2)" : "var(--fg-color-1)",
                backgroundColor: "var(--bg-color-2)",
                border: "none",
                borderBottom: isSelected
                  ? "4px solid var(--fg-color-2)"
                  : "4px solid transparent",
                outline: "none",
                fontWeight: isSelected ? "bold" : "normal",
              }}
            >
              {tab.label}
            </button>
          );
        })}{" "}
      </div>
    </div>
  );
}
