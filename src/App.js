import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary defaultKeyword ="sunset"/>
        <footer className="App-footer text-center">
          <small>Coded by Elnaz Amia</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
