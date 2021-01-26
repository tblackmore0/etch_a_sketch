function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
 



window.onload = function () {
    let container = document.getElementById("container");
    makeRows(16, 16);
    setHover ();
  };


function setHover (){
  items = document.getElementsByClassName ("grid-item");
  for (i=0; i<items.length; i++) {
    items[i].onmouseover = function () {
      this.className = "itemsBlack";
    }
  }
}
