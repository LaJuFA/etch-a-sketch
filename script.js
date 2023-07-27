const gridContainer = document.querySelector("#grid")

for (var i = 0; i < 2; i++) {
    let itemContainer = document.createElement("div")
    for (var j = 0; j < 2; j++) {
        let newItem = document.createElement("p")
        newItem.textContent = j;
        itemContainer.appendChild(newItem)
    }
    gridContainer.appendChild(itemContainer)
}