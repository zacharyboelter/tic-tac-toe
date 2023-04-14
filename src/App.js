import { useState } from "react"


//square component
function Square({ value, onSquareClick}) {
  
  return <button className="square" onClick={(onSquareClick)}>
    {value}
  </button>
}

function Board() {
  // Lift state to parent for ease of communication
  // creates an array with nine elements and sets each of them to null
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  // handle click func, nextSquares creates copy of squares array
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext){
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Your Move: " + (xIsNext ? "X" : "O") + ". make a play, bitch."
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
      </div>
    </>
  )
}


function calculateWinner(squares){
  const lines = [
    [0, 1 , 2],
    [3, 4 , 5],
    [6, 7 , 8],
    [0, 3 , 6],
    [1, 4 , 7],
    [2, 5 , 8],
    [0, 4 , 8],
    [2, 4 , 6],
  ]
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null
}


export default function Game(){
    //lift state to Game function

  return(
    <>
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <ol>{}</ol>
        </div>
      </div>
    </>
  )
}