import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(15)
  let [DCounter,setDCounter] = useState(15)
  // let counter = 0;

  const addValue = () => {
    if (counter <= 19) {
      counter = counter + 1;
      setCounter(counter)
    }
  };
  const decreaseValue = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter)
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
