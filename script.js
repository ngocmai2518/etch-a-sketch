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
    if (event.key === 'Enter') {
      let size = parseInt(sizeInput.value);
      if (!isNaN(size)) {
        sizing(size);
      } else {note.innerHTML = 'Please enter a number';};
    sizeInput.value = "";
}});

const squares = document.querySelectorAll('.square');
for (const square of squares) {
  board.addEventListener('mousedown', () =>{
  square.addEventListener('mouseover', () => {square.classList.add('hover')
})})};