import React from "react";
import "./App.css";
import Congrats from "./components/congrats/Congrats";

function App() {
  return (
    <div className="App" data-test="component-app">
      <Congrats success={true} />
    </div>
  );
}

export default App;
