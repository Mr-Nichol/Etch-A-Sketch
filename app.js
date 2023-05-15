const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.button');
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');

function amount (){
    buttons.forEach((button) => {
        button.addEventListener('click',function(){
            grid.innerHTML = '';
            createGrid(button.value,button.value);
        })       
    });
}


function createGrid(colums,rows){
    let cellAmount = colums*rows;
    
    let cellSize = 500/rows
    for (r=0;r<cellAmount; r++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`
        cell.addEventListener('mouseover',
        ()=> cell.style.cssText = `background-color: black;height: ${cellSize}px; width: ${cellSize}px;`);
        grid.appendChild(cell);
    }
}

createGrid(16,16);
amount();
reset.addEventListener('click',function(){
    grid.innerHTML = ''
    createGrid(16,16)
})
