import { bombBoxes } from "./controllers";
console.log("here");

let grid = document.getElementById("grid");
let bombs = bombBoxes();
console.log("Bombs id ", bombs);

for (let i = 0; i < 9; i++) {
  var row = document.createElement("div");
  row.className = "row";
  for (let x = 1; x <= 9; x++) {
    var cell = document.createElement("div");
    cell.class = "col-1";
    cell.innerText = i * 9 + x;
    cell.style.width = "20px";
    cell.style.display = "inline-block";
    cell.style.border = "1px solid black";
    row.appendChild(cell);
  }
  grid.appendChild(row);
}
