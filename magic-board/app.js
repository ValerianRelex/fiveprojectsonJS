const board = document.querySelector('#board');
const colors = ['red', 'pink', 'blue', 'purple', 'gray', 'white', 'orange', 'green'];
const SQUARE_NUMBER = 870;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', removeColor); 

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#ffdd';
    element.style.boxShadow = `0 0 2px #ffdd`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}