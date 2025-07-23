import { useState, type Dispatch, type SetStateAction } from "react";
import { TabSection } from "./components/TabSection";
import { Checkbox } from "./components/Checkbox";
import { GenerateBarcodes } from "./components/GenerateBarcodes";
import { InputBarcodes } from "./components/InputBarcodes";
import { Copy } from "./components/Copy";

// TODO flesh out README and either make a call to use it as Copy or explore vite raw plugin

function App() {
  const [mode, setMode]: [
    "input" | "generator",
    Dispatch<SetStateAction<"input" | "generator">>,
  ] = useState<"input" | "generator">("input");
  const [showSecrets, setShowSecrets] = useState(false);
  return (
    <>
      <Copy />
      <div
        style={{
          padding: "1rem var(--spacing-container-x)",
          background: "var(--background-alt)",
          borderRadius: "5px",
          marginBottom: "1rem",
        }}
      >
        <TabSection mode={mode} setMode={setMode} />
        <div className="no-print">
          <Checkbox
            label="Show secrets"
            checked={showSecrets}
            onChange={setShowSecrets}
          />
        </div>
        {mode === "input" ? (
          <InputBarcodes showSecrets={showSecrets} />
        ) : (
          <GenerateBarcodes showSecrets={showSecrets} />
        )}
      </div>
    </>
  );
}

export default App;
