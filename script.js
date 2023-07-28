const gridContainer = document.querySelector("#grid");
const buttonSelector = document.querySelector("#quesoton");
const defaultSize = 16;

function makeGrid(size) {
    const gridArea = size * size;

    for (var i = 0; i < gridArea; i++) {
        let newItem = document.createElement("div");

        newItem.classList.add("square");

        newItem.addEventListener("mouseover", function (e) {
            this.classList.add("gray-bg");
        });

        gridContainer.appendChild(newItem);
    }
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
}

makeGrid(defaultSize);

buttonSelector.addEventListener("click", function () {
    let gridSize = prompt("Introducir tamaño de la cuadricula");
    let numberOfSquares = document.querySelectorAll(".square");

    numberOfSquares.forEach(square => {
        square.remove()
    });

    if (isNaN(gridSize) || gridSize > 64 || gridSize == null) {
        gridSize = defaultSize;
    }

    makeGrid(gridSize);
});