### Tic-Tac-Toe App
## Overview

This is a simple React-based tic-tac-toe game. The game board is made up of nine squares, and players take turns clicking on a square to mark it with their symbol (either 'X' or 'O'). The first player to get three symbols in a row (either horizontally, vertically, or diagonally) wins the game. If all squares are filled and no player has three in a row, the game is a draw.
How it Works

The app is made up of two main components: Board and Square. The Board component is the parent component that handles the overall game state, while the Square component represents each individual square on the game board.
# Board Component

The Board component sets up the initial game state by creating an array of nine null squares using the useState hook. The handleClick function is responsible for updating the game state whenever a player clicks on a square. It creates a copy of the current squares array using the slice method to ensure immutability, then updates the array with the current player's symbol ('X' or 'O') based on the xIsNext state. The setSquares and setXIsNext functions are then called to update the game state with the new squares array and toggle the current player.

The Board component then renders three rows of Square components, passing in the appropriate value and onSquareClick props for each square based on the current game state.
# Square Component

The Square component simply renders a button with the appropriate value and onClick function passed in as props. The onClick function calls the onSquareClick function passed in as a prop, which is responsible for handling the square click event.
## Takeaways

Some key concepts that can be learned from this app include:

    - Using React components to create a dynamic user interface
    - Managing state in a React app using the useState hook
    - The importance of immutability in React and how to achieve it using methods like slice
    - Passing props between parent and child components in a React app
    - Handling user events in a React app using event listeners like onClick

Overall, this app provides a great introduction to building simple web applications using React, and can serve as a foundation for more complex projects.