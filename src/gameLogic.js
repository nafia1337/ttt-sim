const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function getWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

function makeMove(board, cell, player) {
  if (cell < 0 || cell > 8 || board[cell] !== null) return null;
  const next = [...board];
  next[cell] = player;
  return { board: next, winner: getWinner(next) };
}

module.exports = { makeMove };
