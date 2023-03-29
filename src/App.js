import React from "react";
import logo from "./assets/logo.png";
import Footer from "./components/Footer/Footer";
import Particle from "./components/Particles";
import "./App.css";

function App() {
  const [isShow, setShow] = React.useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          {isShow ? (
            <div className="info">
              <Particle />
              <b>
                spo2: <code>src/App.js</code>.
              </b>
              <br />
              <b>
                bpm: <code>src/App.js</code>.
              </b>
            </div>
          ) : (
            <>
              <img src={logo} className="logo" alt="logo" />
              <p>Let us take care of your health.</p>
              <button onClick={() => setShow(!isShow)}>start</button>
            </>
          )}
        </header>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
