import React from 'react'
import { SDK, Wallet, RpcHelperUtils, Config } from '@dappykit/sdk'

export function FullControl() {
  const [eoaWallet, setEoaWallet] = React.useState<any>(null)
  const [sdk, setSdk] = React.useState<SDK | null>(null)
  const [smartAccountAddress, setSmartAccountAddress] = React.useState<string | null>(null)
  const [canStoreUserConnection, setCanStoreUserConnection] = React.useState<boolean>(true)
  const [storeUserConnectionStatus, setStoreUserConnectionStatus] = React.useState<string | null>(null)

  return (
      <div className="container-fluid services py-5">
        <h3>Full Control Demo</h3>

        <div className="mt-5">
          <p><strong>Step 1</strong>. Create EOA Wallet.</p>
          <p>EOA (Externally Owned Account) wallet manages your Smart Account and can be changed at any time. An EOA
            wallet can be your smartphone or a centralized account.</p>
          <button className="btn btn-secondary" disabled={eoaWallet} onClick={async () => {
            const wallet = Wallet.createRandom()
            setEoaWallet(wallet)
            const sdk = new SDK(Config.optimismSepoliaConfig, RpcHelperUtils.convertHDNodeWalletToAccountSigner(wallet))
            setSdk(sdk)
            setSmartAccountAddress(await sdk.accountAbstraction.getAccountAddress())
          }}>
            Create EOA Wallet
          </button>

          {eoaWallet && <p className="mt-3">EOA Wallet Address: {eoaWallet.address}</p>}
          {(eoaWallet && !smartAccountAddress) && <p className="mt-3">Smart Account Address: ...</p>}
          {smartAccountAddress && <p className="mt-3"><strong>Smart Account Address</strong>: <a target="_blank"
                                                                                                 href={`https://sepolia-optimism.etherscan.io/address/${smartAccountAddress}`}>{smartAccountAddress}</a>
          </p>}

          {smartAccountAddress && <>
              <hr/>
              <p className="mt-2"><strong>Step 2</strong>. Fund Smart Account and Save Data.</p>

              <p><strong>Fund for ~0.05 OP ETH</strong> to perform the transaction.</p>

              <p>During the sending of the first transaction, a Smart Account will also be deployed.</p>

              <p>In some rare cases, an error may occur during the transaction due to underestimated gas. In this case,
                  wait a couple of minutes until the gas price normalizes.</p>

              <p>
                  Information about social connections or about public files is collapsed into a single hash in
                  DappyKit, which can be used to download data from decentralized storage.
              </p>

              <p>
                  After topping up the wallet on the Optimism Sepolia network, you can save a randomly generated hash
                  into a smart contract.
              </p>

              <button className="btn btn-secondary" disabled={!canStoreUserConnection} onClick={async () => {
                try {
                  setCanStoreUserConnection(false)
                  setStoreUserConnectionStatus('Storing user connection...')
                  await sdk!.connections.setUserConnection({
                    hash: '0x' + '7'.repeat(64),
                    hashFunction: 12,
                    size: 32,
                  })
                  setStoreUserConnectionStatus('User connection stored! Open the explorer to see the transaction')
                } catch (e) {
                  console.log('Storing user connection error', e)
                  setStoreUserConnectionStatus(`Error: ${(e as Error).message}`)
                } finally {
                  setCanStoreUserConnection(true)
                }
              }}>
                  Save Data
              </button>

            {storeUserConnectionStatus && <p className="mt-3">Status: {storeUserConnectionStatus}</p>}
          </>}
        </div>
      </div>
  )
}
