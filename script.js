const gridContainer = document.querySelector("#grid");
const defaultSize = 3;

function makeGrid(size) {
    const gridArea = size * size;

    for (var i = 0; i < gridArea; i++) {
        let newItem = document.createElement("div");
        newItem.textContent = i;

        newItem.addEventListener("mouseover", function (e) {
            this.classList.add("gray-bg");
        });

        gridContainer.appendChild(newItem);
    }
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
}

makeGrid(defaultSize);