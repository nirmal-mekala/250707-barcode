import { useState } from 'react';
import { Barcode } from './Barcode';

export function InputBarcodes({showSecrets}) {
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
            <Barcode value={value} showSecrets={showSecrets}/>
          </div>
        ) : <div><em>please enter a secret</em></div>
        }
        
  </>
}
