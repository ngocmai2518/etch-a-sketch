const board = document.querySelector('.board');
let rows = [];
const draw = document.querySelector('#drawBtn');
const erase = document.querySelector('#eraseBtn');
const clear = document.querySelector('#clearBtn');
const grid = document.querySelector('#gridBtn');

let currentMode = 'draw';
erase.onclick= () => {
  currentMode = 'erase'
};
draw.onclick= () => {
  currentMode = 'draw'
};

let mousePressed = false 
document.onmousedown= () => {
  mousePressed = true
};
document.onmouseup= () => {
  mousePressed = false
};

function toggleHover(square) {
  if (currentMode === 'draw' && mousePressed) {
    square.classList.add('hover');
  } else if (currentMode === 'erase' && mousePressed) {
    square.classList.remove('hover');
  }
}

let currentGridMode = 'show';

function sizing(side) {
  // Clear existing rows
  rows.forEach(row => row.remove());
  rows = []; // Clear the rows array
  for (let i = 0; i <= side - 1; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    for (let j = 0; j <= side - 1; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
      square.addEventListener('mouseover', () => {
        toggleHover(square)});
    }
    board.appendChild(row);
    rows.push(row); // Add the row to the rows array
  }

  squares = document.querySelectorAll('.square');
  console.log(clear, grid);
  clear.onclick = () => {
    for (const square of squares) {
      square.classList.remove('hover');
    }
  }

  grid.onclick = () => {
    if (currentGridMode === 'show') {
      for (const square of squares) {
        square.classList.add('hide-grid')
      }
      grid.innerHTML = 'Show Grid';
      currentGridMode = 'hide';
    } else if (currentGridMode === 'hide') {
      for (const square of squares) {
        square.classList.remove('hide-grid')
      }
      grid.innerHTML = 'Hide Grid';
      currentGridMode = 'show';
    }
  }
}

sizing(16);

let sizeInput = document.querySelector('#size-input');
const note = document.querySelector('#note');

sizeInput.addEventListener('keydown', function(event) {
  note.innerHTML = "";
  if (event.key === 'Enter') {
    let size = parseInt(sizeInput.value);
    if (!isNaN(size)) {
      sizing(size);
    } else {
      note.innerHTML = 'Please enter a number';};
  sizeInput.value = "";
}});

