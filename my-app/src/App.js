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
  const [squares, setSquares] = useState(Array(9).fill(null))

  
  return (
    <>
      <div className="board-row">
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
      </div>
      <div className="board-row">
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
      </div>
      <div className="board-row">
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
      </div>
    </>
  )
}
