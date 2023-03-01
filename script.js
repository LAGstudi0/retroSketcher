var columns = 64;
var rows = 64;

var grid = document.createElement('div');
grid.className = 'grid';
for(var i = 0; i < columns; i++)    {
    var column = document.createElement('div');
    column.className = 'column';
    for(var j = 0; j < rows; j++)   {
        var row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);

}
document.body.appendChild(grid);