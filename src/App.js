import Keypad from "./Keypad.js";
import './App.css';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(prevInput => prevInput + value);
  }

  function calculate() {
    if (!input.trim()) {
      return;
    }

    try {
      const outputVal = evaluate(input);
      setInput(String(outputVal));
    } catch (error) {
      setInput("Error");
    }
  }

  function handleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1>Calculator App Using React</h1>

      <div className="calculator">
        <input type="text" value={input} className="output" readOnly />
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
