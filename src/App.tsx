import { useState, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

// TODO move components to their own files
// TODO flesh out README and either make a call to use it as Copy or explore vite raw plugin
// TODO prettier is being weird… resolve

function BarCode({ value }: { value: string }) {
  useEffect(() => {
    JsBarcode('#barcode', value, { displayValue: false, width: 1, height: 50 });
  }, [value]);

  return <svg id="barcode" />;
}

function InputBarcodes({showSecrets}) {
  const [value, setValue] = useState('');
  return <>
        <label className="no-print">
          Enter secret to barcode:
          <br />
          <input
            type={showSecrets ? 'text' : 'password'}
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
        {value ? (
          <div style={{ marginTop: '1rem' }}>
            {showSecrets && <span>{value}</span> }
            <BarCode value={value} />
          </div>
        ) : <div><em>please enter a secret</em></div>
        }
        
  </>
}

function Range({ min, max, value, onChange, label }) {
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

function GenerateBarcodes() {
  const [capitalAlpha, setCapitalAlpha] = useState(true);
  const [lowercaseAlpha, setLowercaseAlpha] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [numberOfBarcodes, setNumberOfBarcodes] = useState(1);
  const [numberOfCharacters, setNumberOfCharacters] = useState(15);

  return (
    <div>
      <Checkbox label="A-Z" checked={capitalAlpha} onChange={setCapitalAlpha} />
      <Checkbox label="a-z" checked={lowercaseAlpha} onChange={setLowercaseAlpha} />
      <Checkbox label="Numbers" checked={numbers} onChange={setNumbers} />
      <Checkbox label="!@#$%^&*" checked={specialCharacters} onChange={setSpecialCharacters} />
      <div>
      <Range label="Number of barcodes" min={1} max={20} value={numberOfBarcodes} onChange={setNumberOfBarcodes} />
</div>
      <div>
      <Range label="Number of characters" min={5} max={128} value={numberOfCharacters} onChange={setNumberOfCharacters} />
</div>
    </div>
  );
}

function Copy() {
  // might be able to import the README as text and run remark?
  return (
    <div className="no-print">
    
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
    </div>
  )
}

function TabSection({mode, setMode}) {
  const tabs = [
    { id: 'input', label: 'Input Secret' },
    { id: 'generator', label: 'Generate Secrets' },
  ];

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      setMode(tabs[(index + 1) % tabs.length].id);
    } else if (e.key === 'ArrowLeft') {
      setMode(tabs[(index - 1 + tabs.length) % tabs.length].id);
    }
  };

  return (
    <div style={{ width: '100%', marginBottom: '1rem' }} className="no-print">
      <div
        role="tablist"
        aria-label="Mode Tabs"
        style={{
          display: 'flex',
          width: '100%',
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
              onClick={() => setMode(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                flex: 1,
                padding: '1em',
                cursor: 'pointer',
                color: isSelected ? 'var(--text-header)' : 'var(--text-primary)',
                backgroundColor: 'var(--background)',
                border: 'none',
                borderBottom: isSelected ? '4px solid var(--text-header)' : '4px solid transparent',
                outline: 'none',
                fontWeight: isSelected ? 'bold' : 'normal',
              }}
            >
              {tab.label}
            </button>
          );
        })} </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

function App() {
  const [mode, setMode] = useState('input');
  const [showSecrets, setShowSecrets] = useState(false);
  return (
    <>
      <Copy />
      <div style={{ padding: '1rem var(--spacing-container-x)', background: 'var(--background-alt)', borderRadius: '5px', marginBottom: '1rem' }}>
        <TabSection  mode={mode} setMode={setMode}/>
        <Checkbox label="Show secrets" checked={showSecrets} onChange={setShowSecrets} />
        { mode === 'input' ? 
          <InputBarcodes showSecrets={showSecrets}/> :
          <GenerateBarcodes />
        }
      </div>
    </>
  );
}

export default App;
