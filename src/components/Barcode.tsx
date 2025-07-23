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
          <button
            onClick={handleCopy}
            type="button"
            style={{
              backgroundColor: "var(--bg-color-2)",
              border: "1px solid var(--fg-color-2)",
              borderRadius: "4px",
              padding: "6px 8px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "background-color 0.2s",
              marginLeft: "8px",
              color: "var(--fg-color-2)",
            }}
            title="Copy to clipboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
