const gridContainer = document.querySelector("#gridContainer");
//gridCell.classList.add("gridCell");
let createDiv;
let gridMaker = makeGrid(32);
let gridCell = document.getElementsByClassName("gridCell");



function makeGrid(cells) {
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for (let i = 0; i < cells*cells; i++) {
        createDiv = document.createElement("div");
        createDiv.classList.add("gridCell");
        createDiv.addEventListener("mouseover", function(e) {
            changeColor(e.target);
        })
        gridContainer.appendChild(createDiv);
        
    }
    return;
}
function changeColor(target) {
    target.style.backgroundColor = "#8F8EBF";
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



document.getElementById("reset").addEventListener("click", resetGrid, false);
