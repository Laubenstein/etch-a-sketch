const gridContainer = document.querySelector("#gridContainer");
//gridDiv.classList.add("gridDiv");
let createDiv;
const GRIDMAKER = makeGrid(16);
let gridDiv = document.getElementsByClassName("gridDiv");



function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        createDiv = document.createElement("div");
        gridContainer.appendChild(createDiv);
        createDiv.classList.add("gridDiv");
    }
    return;
}
function changeColor() {
    this.style.backgroundColor = "black";
    return;
}

for (var i = 0; i < gridDiv.length; i++) {
    gridDiv[i].addEventListener("mouseover", changeColor, false);
}