const grid = document.querySelector('.grid');

function createTheGrid(columns,rows){
    for(c=0; c<columns; c++){
        let columns = document.createElement('div');
        columns.classList.add('columns')
        grid.appendChild(columns);
        for(r=0; r<rows; r++){
            let rows = document.createElement('div');
            rows.classList.add('rows')
            columns.appendChild(rows);
        }
    }
}

createTheGrid(16,16);