import JsBarcode from "jsbarcode";
import { useEffect } from "react";

export function Barcode({
  uuid,
  value,
  showSecrets,
}: {
  uuid: string;
  value: string;
  showSecrets: boolean;
}) {
  useEffect(() => {
    JsBarcode(`#barcode-${uuid}`, value, {
      displayValue: showSecrets,
      width: 1,
      height: 50,
    });
  }, [value, showSecrets]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => alert("Failed to copy: " + err));
  };

  return (
    <>
      <div
        style={{
          marginBottom: "8px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div>
          <svg id={"barcode-" + uuid} />
        </div>
        <div className="no-print">
          <button onClick={handleCopy} style={{ marginLeft: "8px" }}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}
