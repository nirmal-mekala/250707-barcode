
export function Copy() {
  // might be able to import the README as text and run remark?
  return (
    <>
      <h1 className="no-print">barcodez</h1>
      <blockquote className="no-print">
        Encode a secret as a barcode or generate secrets as barcodes.
      </blockquote>
      <p className="no-print">
        ⚠️ WARNING ⚠️ - USE AT YOUR OWN RISK AND ALWAYS STORE PASSWORDS IN A
        SECURE LOCATION
      </p>
      <h2 className="no-print">wtf</h2>
      <p className="no-print">
        Writing down the password to a password manager and storing it in a
        secure location is common advice. This takes that advice in a{' '}
        <em>weird</em> 👽 and <strong>wonderful</strong> 🪄 direction by
        generating a page (with the intent of being printed out and stored
        securely) of barcodes that “encode” secrets (the encoding is not a true
        security measure).
      </p>
      <p className="no-print">
        In this way, no human-readable passwords are stored. As a bonus, the
        printed barcode can be used as an easy, error-free way to enter
        passwords that serves as an alternative to biometrics. Perfect for older
        systems.
      </p>
      <h2 className="no-print">no way i’m entering my password</h2>
      <p className="no-print">
        Good instinct! You can inspect the source and network tab to validate
        that all secret logic takes place purely in the browser, but the choice
        is yours!
      </p>
    </>
  )
}
