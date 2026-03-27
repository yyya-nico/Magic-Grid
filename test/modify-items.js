function addItems(numItems= 10) {
  const container = document.querySelector(".container");
  const items = container.children;
  const lastItem = items.length ? items[items.length - 1] : null;
  const lastNumber = lastItem ? parseInt(lastItem.innerHTML) : 0;

  for (let i = 1; i <= numItems; i++){
    const newDiv = document.createElement("div");
    const newNumber = lastNumber + i;

    newDiv.innerText = newNumber.toString();
    container.appendChild(newDiv);
    newDiv.classList.add(`item${newNumber}`);
  }

  magicGrid.positionItems();
}

function removeItems(numItems = 10) {
  const container = document.querySelector(".container");
  const items = container.children;
  if (!items.length) return;
  const lastIndex = items.length - 1;
  let stopIndex = lastIndex - numItems;

  if (stopIndex < 0) stopIndex = 0;

  for (let i = lastIndex; i >= stopIndex; i--){
    items[i].remove();
  }
  magicGrid.positionItems();
}

