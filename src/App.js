import React from "react"
import "./App.css";
import Dictionary from "./Dictionary";
import LogoBook from "./LogoBook.png"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"><img src={LogoBook} alt="logo" className="LogoBook img-fluid" />
         </header>
        <Dictionary defaultKeyword ="sunset"/>
        <footer className="App-footer text-center">
          <small>Coded by Elnaz Amia</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
