import React from 'react'
import './demo.css'

export function RollupGateway() {
  const [eoaWallet, setEoaWallet] = React.useState<any>(null)

  return (
      <div className="container-fluid services py-5 text-muted disabled-content">
        <h3>Rollup Gateway Demo (Coming Soon)</h3>

        <div className="mt-5">
          <p><strong>Step 1</strong>. Create EOA via Webauthn.</p>
          <p>EOA (Externally Owned Account) wallet manages your Smart Account and can be changed at any time. An EOA
            wallet can be your smartphone or a centralized account.</p>
          <button className="btn btn-secondary" disabled={eoaWallet} onClick={async () => {
          }}>
            Create EOA via Webauthn
          </button>

        </div>
      </div>
  )
}
