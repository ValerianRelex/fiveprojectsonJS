const domItem = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

domItem.addEventListener('dragstart', dragstart);
domItem.addEventListener('dragend', dragend);

placeHolders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
});

function dragstart(event) {
    console.log('start', event.target);
    event.target.classList.add('hold');
    setTimeout( () => {
        event.target.classList.add('hideElement');
    });
}

function dragend(event) {
    console.log('end');
    event.target.classList.remove('hold', 'hideElement');
}

function dragover(event) {
    event.preventDefault();
    console.log('dragover');
}

function dragleave(event) {
    console.log('dragleave');
    event.target.classList.remove('hovered');
}

function dragenter(event) {
    console.log(event);
    event.target.classList.add('hovered');
}

function drop(event) {
    event.target.classList.remove('hovered');
    event.target.append(domItem);
    console.log('drop');
}