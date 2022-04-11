// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var pixelCanvas = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');
var color = document.getElementById("colorPicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    let row = pixelCanvas.insertRow(x);
    for (let y = 0; y < width; y++) {
      let column = row.insertColumn(y);
      column.addEventListener("mousedown", function(event)) {
        column.style.backgroundColor = color.value;
      column.addEventListener("contextmenu", function(event)) {
        event.preventDefault();
        column.style.backgroundColor = "white";
        })
      })
    }
  }
});

sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid(height.value, width.value);
});
