# Contract

Sara's file src/gameLogic.js exports:

  makeMove(board, cell, player)

- board: array of 9 items, each "X", "O" or null
- cell: number 0 to 8
- player: "X" or "O"

Returns: { board: [...new board...], winner: "X" | "O" | null }
Returns null if the move is invalid (cell taken or outside 0-8).

Rule: changing this file needs a pull request approved by the other person.
