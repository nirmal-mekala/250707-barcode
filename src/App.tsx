import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import JsBarcode from 'jsbarcode';

function BarCode({ value }: { value: string }) {
  useEffect(() => {
    JsBarcode('#barcode', value, { displayValue: false, width: 1, height: 50 });
  }, [value]);

  return <svg id="barcode" />;
}

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <h1>barcodez</h1>
      <blockquote>
        Encode a secret as a barcode or generate secrets as barcodes.
      </blockquote>
      <p>
        ⚠️ WARNING ⚠️ - USE AT YOUR OWN RISK AND ALWAYS STORE PASSWORDS IN A
        SECURE LOCATION
      </p>
      <h2>wtf</h2>
      <p>
        Writing down the password to a password manager and storing it in a
        secure location is common advice. This takes that advice in a{' '}
        <em>weird</em> 👽 and <strong>wonderful</strong> 🪄 direction by
        generating a page (with the intent of being printed out and stored
        securely) of barcodes that “encode” secrets (the encoding is not a true
        security measure).
      </p>
      <p>
        In this way, no human-readable passwords are stored. As a bonus, the
        printed barcode can be used as an easy, error-free way to enter
        passwords that serves as an alternative to biometrics. Perfect for older
        systems.
      </p>
      <h2>no way i’m entering my password</h2>
      <p>
        Good instinct! You can inspect the source and network tab to validate
        that all secret logic takes place purely in the browser, but the choice
        is yours!
      </p>
      <div style={{ padding: '0 var(--spacing-container-x)' }}>
        <label>
          Enter secret to barcode:
          <br />
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              padding: '10px 15px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              outline: 'none',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: 'none',
              width: '100%',
              maxWidth: '400px',
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#4A90E2';
              e.currentTarget.style.boxShadow =
                '0 0 5px rgba(74, 144, 226, 0.5)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </label>
      </div>
      <p>barcodes:</p>

      {value && (
        <div style={{ padding: '0 var(--spacing-container-x)' }}>
          <BarCode value={value} />
        </div>
      )}
    </>
  );
}

export default App;
