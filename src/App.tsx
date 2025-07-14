import { useState, useEffect } from 'react';
import JsBarcode from 'jsbarcode';
import { TabSection } from './components/TabSection';
import { Checkbox } from './components/Checkbox';
import { GenerateBarcodes } from './components/GenerateBarcodes';
import { InputBarcodes } from './components/InputBarcodes';
import { Copy } from './components/Copy';

// TODO flesh out README and either make a call to use it as Copy or explore vite raw plugin
// TODO prettier is being weird… resolve

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
