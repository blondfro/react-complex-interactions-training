import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [toggleLogo, setToggleLogo] = useState(true);

  const onToggleLogo = () => {
    setToggleLogo(!toggleLogo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={toggleLogo ? "App-logo" : "static-logo"}
          alt="logo"
          onClick={onToggleLogo}
        />
        <h1>Welcome to React</h1>
        <button onClick={onToggleLogo}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
