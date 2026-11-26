const { makeMove } = require("./gameLogic");

function render(board) {
  const c = board.map((x) => x || ".");
  console.log(c.slice(0, 3).join(" "));
  console.log(c.slice(3, 6).join(" "));
  console.log(c.slice(6, 9).join(" "));
}

const empty = Array(9).fill(null);
const result = makeMove(empty, 4, "X");
render(result.board);
console.log("Winner:", result.winner);

module.exports = { render };
