// Рисуем игровое поле
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileSize = 32

const wall = new Image();
wall.src = "./assets/images/wall.png";

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 7, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 6, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 7, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function setCanvasSize() {
  canvas.width = map[0].length * tileSize;
  canvas.height = map.length * tileSize;
}

function drawWall(column, row, size) {

  wall.addEventListener('load', function() {
    ctx.drawImage(
      wall,
      column * size,
      row * size,
      size,
      size
    );
  }) 
}

function draw() {
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      let tile = map[row][column];
      if (tile === 1) {
        drawWall(column, row, tileSize);
      }
      // else  {
      //   ctx.fillStyle = "red";
      //   ctx.fillRect(column * tileSize,
      //     row * tileSize, tileSize, tileSize)
      // }
    }
  }
}


setCanvasSize()
draw()
