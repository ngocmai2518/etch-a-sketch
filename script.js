const board = document.querySelector('.board');
const side = 16;
for (let i = 0; i <= side - 1; i++) {
  const row = document.createElement('div');
  row.classList.add('row')
  for (let i = 0; i <= side - 1; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }
  board.appendChild(row);
}