
let grid=[];
buildGrid(10, 10);
displayGrid();

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