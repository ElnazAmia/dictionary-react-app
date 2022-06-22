import React from "react"
import "./App.css";
import Dictionary from "./Dictionary";
import LogoBook from "./LogoBook.png"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={LogoBook} alt="logo" className="LogoBook img-fluid" />
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer text-center">
          <small>
            This project was coded by{" "}
            <a
              href="https://confident-sinoussi-76f648.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Elnaz Amia 
            </a> and is open-sourced on{" "}
            <a
              href="https://github.com/ElnazAmia"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://rainbow-dieffenbachia-339485.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
