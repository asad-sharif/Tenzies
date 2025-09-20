import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState<number>()

  function generateRandomNummber() {
    const randomNumber: number = Math.ceil(Math.random() * 10)
    setNumber(randomNumber)
    console.log(number);
  }

  return <main>
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

    <div id="board">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((dice, index) => (
        <div
          key={index}
          className={`${(dice === 4 || dice === 7) ? 'dice dice-highlighted' : 'dice'}`}
        >
          {dice}
        </div>
      ))}
    </div>

    <button onClick={generateRandomNummber}>Roll</button>
  </main>
}

export default App