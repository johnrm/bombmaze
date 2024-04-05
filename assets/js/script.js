
let grid=[];
//buildGrid(10, 10);
//displayGrid();

/**
 * Build Grid function
 * This generates the grid and populates it with game objects.
 */
function buildGrid(height, width) {
    let rowData = [];
    console.log(height, 'x', width);
    for (let row = 0; row < height; row++) {
        rowData = [];
        for (let col = 0; col < width; col++) {
            rowData.push(Math.floor(Math.random() * 10))
        }
        grid.push(rowData);
    }
}

/**
 * Display Grid
 * This dumps the grid to index.html.
 */
function displayGrid() {
    for (let row in grid) {
        document.write(grid[row] + '<br>');
    }
}

const container = document.getElementById("container");
makeGrid(10, 10);

function makeGrid(row, col) {
  container.style.setProperty('--grid-rows', row);
  container.style.setProperty('--grid-cols', col);
  for (c = 0; c < (row * col); c++) {
    let cell = document.createElement("div");
    cell.innerText = (Math.floor(Math.random() * 10));
    container.appendChild(cell).className = "grid-item";
  };
};