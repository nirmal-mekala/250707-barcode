
export function Copy() {
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
