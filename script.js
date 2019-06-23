const gridContainer = document.querySelector("#gridContainer");
//gridDiv.classList.add("gridDiv");
let createDiv;
let gridMaker = makeGrid(64);
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
function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let prompt = window.prompt("Enter grid size");
    gridMaker = makeGrid(prompt);
    
    return;
}

//add event listener for each grid element
//Does not work for dynamically added elements! Better use Event delegation.
for (var i = 0; i < gridDiv.length; i++) {
    gridDiv[i].addEventListener("mouseover", changeColor, false);
}

document.getElementById("reset").addEventListener("click", resetGrid, false);
