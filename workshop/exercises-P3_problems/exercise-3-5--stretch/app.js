// Exercise 3-5 - the Custom Grid
// ------------

// Hints
// - use the 'blur' event
// - one event listener per input
// - If you need extra hints, see somebody... :)
const fraction = "1fr ";
let rows = 10;
let cols = 10;
const board = document.querySelector(".board");
board.style.display = "inline-grid";
board.style.gridTemplateColumns = `${fraction.repeat(cols)}`;
board.style.gridTemplateRows = `${fraction.repeat(rows)}`;
board.style.height = "600px";
board.style.width = "600px";

function addCells(num1, num2) {
  for (i = 0; i < num1 * num2; i++) {
    let newCell = document.createElement("span");
    newCell.classList.add("cell");
    newCell.id = `cell-${i + 1}`;
    board.appendChild(newCell);
  }
}
addCells(rows, cols);
