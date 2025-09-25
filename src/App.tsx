import { useEffect, useRef, useState } from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use'


const App = () => {
  const [dice, setDice] = useState(() => generateRandomDice())
  const btnRef = useRef<HTMLButtonElement>(null)
  const { width, height } = useWindowSize()


  function generateRandomDice() {
    // 👇 a triditional approach to create an array of random numbers
    // const newDice: number[] = []

    // for (let i = 0; i < 10; i++) {
    //   const random = Math.ceil(Math.random() * 6)
    //   newDice.push(random)
    // }

    // return newDice

    // 👇 a more functional programming approach is to use array methods
    return new Array(10)
      .fill(1)
      .map((_, index) => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: index + 1
      }))
  }

  function hold(id: number) {
    // console.log(id);

    // because we need to know the previos state, so used callback
    // setDice(oldDice => {

    // because the oldDice was an array of objects so mapped it to get to each object inside(die)
    //   return oldDice.map(die => {

    // checked if this object matches with the id received
    //     return die.id === id ?

    // only change the isHeld property
    //       { ...die, isHeld: !die.isHeld } :
    //       die
    //   })
    // })

    // 😎👇 more concise with implicit returns
    setDice(oldDice => oldDice.map(die => die.id === id ?
      { ...die, isHeld: !die.isHeld } :
      die
    )
    )
  }

  function rollDice() {
    if (!gameWon) {
      setDice(oldDice => oldDice.map(die => (
        die.isHeld ? die : {
          ...die,
          value: Math.ceil(Math.random() * 6)
        }
      )))
    } else {
      setDice(generateRandomDice())
    }
  }

  let gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  useEffect(() => { 
    if (gameWon) {
      btnRef.current && btnRef.current.focus()
    }
  }, [gameWon])

  return <main>
    {gameWon && <Confetti width={width} height={height} />}
    {gameWon ? <h1>Congratulations, You won!</h1> : <h1>Tenzies</h1>}
    {gameWon ? <p>Press 'New Game' to start again.</p> : <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}

    <div id="board">
      {dice?.map(die => (
        <Die
          key={die.id}
          value={die.value}
          id={die.id}
          isHeld={die.isHeld}
          hold={hold}
        />
      ))
      }
    </div>

    <button
      id="roll-btn"
      onClick={rollDice}
      ref={btnRef}
    >
      {gameWon ? "New Game" : 'Roll'}

    </button>
  </main>
}

export default App