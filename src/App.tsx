import React from 'react';
import { ASSET_URL, CHOSEN_THEME } from './constants'
import logo from './static/images/Blockchain-Funds(已去底)-DD.png';
import './static/styles/App.css';
import footerImage from './static/images/hbclogo-DD.png';
import { iframeResizer } from 'iframe-resizer'
import './static/styles/App.css';

const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`

class App extends React.Component {

  componentDidMount() {
    iframeResizer({ log: false }, '#opensea-iframe')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
          </p>
          <i className="material-icons right">menu</i>
        </header>
        <main className="App-main">
          <div className="App-hero">
            <div className="App-hero-image"></div>
            <p>
              My Marketplace
            </p>
            <small>Digital collectibles from my company</small>
          </div>
          <div className="App-opensea-iframe-container">
            <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} width='100%' height='100%' frameBorder='0' allowFullScreen></iframe>
          </div>
        </main>
        <footer className="App-footer">
          {/* Placeholder image for footer */}
          <div className="App-logo-container">
            <img src={footerImage} className="App-footer-logo" alt="BCharity" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
