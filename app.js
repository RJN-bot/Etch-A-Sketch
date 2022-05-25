let color = 'black';

function createGrid(size) {
    const sketchPad = document.querySelector('.sketchpad');
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "white";
        newDiv.addEventListener('mouseover', changeCellColor)
        newDiv.classList.add('cell');
        sketchPad.insertAdjacentElement('beforeend', newDiv)
    }
}

createGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createGrid(input);

    } else {
        alert('Only value between 2 and 100 accepted')
    }
}


function changeCellColor() {
    if (color === 'random') {
        this.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}


function resetBoard() {
    const sketchPad = document.querySelector('.sketchpad');
    let cell = sketchPad.querySelectorAll('div');
    cell.forEach((div) => div.style.backgroundColor = 'white')
}