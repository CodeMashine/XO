const turnOrder = document.querySelector('.turn_order');
const gameField = document.querySelector('.game_field');
const td = document.querySelectorAll('td');
const btn = document.querySelector('.start');

let counter = 0;

function start(event) {
    if (event.target.closest('.start')) {
        turnOrder.innerText = 'X now turn';
        for (let prop of td) {
            prop.innerText = '';
            prop.classList.remove('.busy');
        }
        counter = 0;
    }
}

function turn(event) {
    if(event.target.closest('td')){
        const chosen = event.target;
        if (chosen.className !== '.busy') {
            if (counter % 2 === 0) {
                chosen.innerText = 'X';
                turnOrder.innerText = 'O now turn';
            } else {
                chosen.innerText = 'O';
                turnOrder.innerText = 'X now turn';
            }
            chosen.classList.add('.busy');
            ++counter;
        }
    }
}

console.log(td['0'].innerText==='X') ;

gameField.addEventListener('click', (event) => {
    turn(event);
})

document.addEventListener('click', (event) => {
    start(event);
})