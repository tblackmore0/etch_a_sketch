function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      container.appendChild(cell).className = "grid-item";
      cell.onmouseover = function () {
        this.style.backgroundColor = "#" + randomColor;
      }
    };
  };


window.onload = function () {
    let container = document.getElementById("container");
    let button = document.getElementById ("resetButton");
    button.addEventListener("click", reset);
    makeRows(16, 16);    
  };


function reset () {
  let size = window.prompt ("Please enter pixel size, 1-64");
  if (size >= 65 || size == null || size == undefined || size == false || isNaN(size)) {
    alert ("Please enter a number between 1 and 64");
  } else if (size <65) {
    eradicate ();
    makeRows (size, size);
  }
}

function eradicate () {
  const myNode = document.getElementById("container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}
