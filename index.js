/*
const container = document.querySelector('.content');
const h3 = document.createElement('h3'); //create element in mem
h3.classList.add('newercontent') //add class
h3.textContent = "I'm a blue h3!"; //content
h3.style.color = 'blue'; //styles
container.appendChild(h3) //add to parent
*/

const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const content = document.querySelector('.content');

let size = 100;
generate_tiles(size);

function generate_tiles(size){
    const side = size_calc(size);
    for (let i = 0; i < size; i++) {
        const tile = document.createElement('tile');
        tile.classList.add('tile-off');
        tile.style.width = side;
        tile.style.height = side;
        tile.addEventListener('mouseover', () =>{
            tile.classList.toggle('tile-off');
            tile.classList.toggle('tile-on');
        });
        grid.appendChild(tile);
    }
}

function grid_reset(){
    grid.innerHTML = '';
}

function grid_changeSize(){
    grid_reset();
    const newSize = window.prompt("Enter new size: ");
    alert("New size: " + newSize);
    size = newSize
    generate_tiles(size);
}

function size_calc(size) {
    const grid_wall = 500;
    const num_tiles = size;
    const tiles_per_wall = Math.sqrt(num_tiles);
    const true_length = (grid_wall / tiles_per_wall).toString();
    return true_length.concat('px');
}


// buttons
const button_reset = document.createElement('button');
button_reset.classList.add('reset-button');
button_reset.textContent="Reset Grid";
button_reset.addEventListener('click', () => {
    grid_reset();
    generate_tiles(size);
});
content.append(button_reset);

const button_changeSize = document.createElement('button');
button_changeSize.classList.add('change-button');
button_changeSize.textContent="Change Grid Size";
button_changeSize.addEventListener('click', () => {
    grid_changeSize();
});
content.append(button_changeSize);


