import React from "react";
import "./App.css";
import ButtonBoard from "./components/ButtonBoard";
import Display from "./components/Display";

function App() {
  return (
      <div className="calculator-main">
        <Display />
        <ButtonBoard />
      </div>
  );
}

export default App;
