const sketchPad = document.querySelector('.sketchpad');

rowDiv = () => {

    for (let i = 1; i < 5; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`row-${i}`);
        sketchPad.appendChild(newDiv);
    }
}


const rowDivSelect = document.querySelectorAll('.row-div');
cellDiv = () => {


    const cellDiv = document.createElement('div');

    cellDiv.classList.add('cell-div');
    for (let i = 1; i < 5; i++) {
        rowDivSelect[i].appendChild(cellDiv);

    }

    console.log(rowDivSelect);

}



function createGrid() {

    rowDiv();
    for (let j = 0; j < 4; j++) {
        cellDiv();
    }


}

createGrid();













function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}





