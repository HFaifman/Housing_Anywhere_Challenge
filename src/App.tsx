import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loadingStatus, setLoadingStatus] = React.useState({
    loading: false,
    error: false,
  });
  const [characters, setCharacters] = React.useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
