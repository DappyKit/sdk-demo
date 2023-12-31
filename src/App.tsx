import React from 'react'
import './themes/sparlex-1.0.0/css/bootstrap.min.css'
import './themes/sparlex-1.0.0/css/style.css'
import './App.css'
import rollupImage from './img/rollup.jpeg'
import classicImage from './img/classic.jpeg'
import { FullControl } from './demo/FullControl'
import { RollupGateway } from './demo/RollupGateway'

function App() {
  return (
      <>
        <div className="container-fluid sticky-top px-0">
          <div className="container-fluid bg-light">
            <div className="container px-0">
              <nav className="navbar navbar-light navbar-expand-xl">
                <a href="/" className="navbar-brand">
                  <h1 className="text-primary display-4">DappyKit Demo</h1>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-fluid services py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{maxWidth: 800}}>
              <h1 className="display-3">DappyKit Modes</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <div className="services-content">
                        <h3>Full Control</h3>
                        <p className="">In Full Control mode, a person manages their own independently through a Smart
                          Account. Each
                          blockchain operation is paid for by the person themselves.</p>
                        <p>Despite the fact that the mode allows full control over one's data, it is not suitable for
                          mass adoption and will only be useful to professionals.</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src={classicImage} className="img-fluid rounded" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src={rollupImage} className="img-fluid rounded" alt=""/>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="services-content text-start">
                        <h3>Rollup Gateway</h3>
                        <p>Operations through the rollup gateway allow for many operations to be carried out without
                          paying blockchain transaction fees at the time of the operation.</p>
                        <p>The rollup gateway collects all operations with cryptographic signatures and saves them at
                          its own expense at certain intervals. Safe and scalable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="container-fluid services py-5">
          <div className="container py-5">

            <div className="row g-4">
              <div className="col-lg-6">
                <FullControl/>
              </div>
              <div className="col-lg-6">
                <RollupGateway/>
              </div>
            </div>

          </div>
        </div>
      </>
  )
}

export default App
