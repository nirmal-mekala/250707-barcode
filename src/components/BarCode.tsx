import { useEffect } from 'react';

export function Barcode({ value, showSecrets }: { value: string, showSecrets: boolean }) {
  useEffect(() => {
    JsBarcode('#barcode', value, { displayValue: false, width: 1, height: 50 });
  }, [value]);

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => alert('Failed to copy: ' + err));
  };

  return (
    <>
      {showSecrets && <span>{value}</span>}
      <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <div>
          <svg id="barcode" />
        </div>
        <div class="no-print">
          <button onClick={handleCopy} style={{ marginLeft: '8px' }}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}
