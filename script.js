const board = document.querySelector('.board');
let rows = [];

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
    }
    board.appendChild(row);
    rows.push(row); // Add the row to the rows array
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

const squares = document.querySelectorAll('.square');
const draw = document.querySelector('#drawBtn');
const erase = document.querySelector('#eraseBtn');

let currentMode = 'draw';
erase.onclick = () => {
  currentMode = 'erase'
};
draw.onclick = () => {
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

// Attach event listeners to squares
for (const square of squares) {
  square.addEventListener('mouseover', () => {
    toggleHover(square);
  });
}

const reset = document.querySelector('#resetBtn');
reset.onclick = () => {
  for (const square of squares) {
    square.classList.remove('hover');
  }
}
