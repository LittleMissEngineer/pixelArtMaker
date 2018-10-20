// Select color input
// Select size input

let size = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

color.addEventListener("click", function() {});

size.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
}

function makeGrid() {

    for(let r = 0; r <height.value; r++){
        const row = table.insertRow(r);
        for (let w = 0; w < width.value; w++){
            const cell = row.insertCell(w);
            cell.addEventListener("click", fillGrid);
    } 
    }
}   
// Your code goes here!


function clearGrid(){
    //delete table.firstChild;
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }
}

function fillGrid(){
    this.setAttribute("style", `background-color: ${color.value}`);
    document.body.style.color = color.value;
    return true;
}

