import { useState } from "react";
import Die from "./components/Die";

const App = () => {
  const [number, setNumber] = useState<number>()

  function generateRandomNummber() {
    const randomNumber: number = Math.ceil(Math.random() * 6)
    setNumber(randomNumber)
    console.log(number);
  }

  return <main>
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

    <div id="board">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((die, index) => (
        <Die key={index} value={die} />
      ))}
    </div>

    <button id="roll-btn" onClick={generateRandomNummber}>Roll</button>
  </main>
}

export default App