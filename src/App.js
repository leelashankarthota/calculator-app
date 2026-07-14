import Keypad from "./Keypad.js";
import './App.css';
import { useState } from "react";

function App(){

  const [input, setInput] = useState("");
  function handleClick(value){

setInput(input + value)

  }

function calculate(value){

let outputVal = eval(input)
setInput(outputVal)

}
function handleClear(){

setInput("")

}
// eslint-disable-next-line no-eval
// const result = eval(input);
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
