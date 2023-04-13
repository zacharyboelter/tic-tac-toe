import { useState } from "react"


//square component
function Square() {
  //state 
  // const [value, setValue] = useState(null)

  // handleClick sets 'X'
  function handleClick() {
    setValue('X')
    console.log('Clicked dat ho!')
  }
  return <button
    className="square"
    onClick={handleClick}
  >
    {value}
  </button>
}

export default function Board() {

  // Lift state to parent for ease of communication
  // creates an array with nine elements and sets each of them to null
  const [squares, setSquares] = useState(Array(9).fill(null))


  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  )
}
