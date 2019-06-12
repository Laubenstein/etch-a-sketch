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

document.getElementsByClassName("gridDiv").addEventListener("hover", changeColor();)
function changeColor() {
    document.getElementsByClassName("gridDiv").element.style.backgroundColor = "red";
}