const btnStart = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeElement = document.querySelector('#time');
// const board = document.querySelector('.board');
let score = 0;

btnStart.addEventListener('click', (event) => {
    event.preventDefault(); // отменим действие по умолчанию
    screens[0].classList.add('up'); // добавим класс Up к первому DIV с классом Screen
});

timeList.addEventListener('click', event => {
    // делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = Number(event.target.getAttribute('time-value'));
        // time = +event.target.getAttribute('time-value'); // можно и так преобразовать строку в число... Это называется УНАРНЫЙ оператор.

        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove(); // удалим мишень
        createRandomCircle(); // нарисуем новую
    }
})

function startGame() {
    screens[1].classList.add('up'); // добавляем класс из стилей CSS - в котором прописано, что нужно текущее окно поднять на 100 процентов вверх, а там, окно игры

    createRandomCircle();

    setInterval(decreaseTime, 1000);

    editTimeElement(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame(); // допишу позже
    } else {
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`; // это чтоб подставлялся нолик, когда значение становится не десятичным
        }
        editTimeElement(currentTime);
    }
}

function editTimeElement(val) {
    timeElement.innerHTML = `00:${val}`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(14, 64);
    const locX = getRandomNumber(0, 500 - size);
    const locY = getRandomNumber(0, 500 - size);

    circle.classList.add('circle');
    circle.style.cssText = `
        width: ${size}px;
        height: ${size}px;    
        top: ${locX}px;    
        left: ${locY}px;    
            
    `;

    board.append(circle); // работает и без добавления константы, и ее инициализации с помощью DOM метода .querySelector('.board');
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function finishGame() {
    timeElement.parentElement.classList.add('hide'); // этот вариант - более эстетичен, нет скачка окна
    // timeElement.parentElement.remove(); //
    board.innerHTML = `
    <h1> Ваш счет = <span class="primray">${score} </span> </h1>
    `;
}