const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const sideBar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

upBtn.addEventListener('click', () => {
    changeSlide('up')
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }

})

const heightWindow = container.clientHeight;

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    mainSlide.style.transform = `translateY(-${heightWindow * activeSlideIndex}px)`;

    sideBar.style.transform = `translateY(${heightWindow * activeSlideIndex}px)`;
}

