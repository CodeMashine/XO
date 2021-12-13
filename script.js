const turnOrder = document.querySelector('.turn_order');
const gameField = document.querySelector('.game_field');
const td = document.querySelectorAll('td');
const btn = document.querySelector('.start');

let counter = 0;

function start(event) {
    if (event.target.classList.contains('start')) {
        turnOrder.innerText = 'X now turn';
        for (let prop of td) {
            prop.innerText = '';
            prop.classList.remove('.busy');
        }
        counter = 0;
        gameField.addEventListener('click',turn);
    }
    
}

function turn(event) {
    if(event.target.closest('td')){
        const chosen = event.target;
        if (chosen.className !== 'busy') {
            if (counter % 2 === 0) {
                chosen.innerText = 'X';
                turnOrder.innerText = 'O now turn';
            } else {
                chosen.innerText = 'O';
                turnOrder.innerText = 'X now turn';
            }
            chosen.classList.add('busy');
            ++counter;
        }
    }
    isVictory() ;
}

function isVictory(){
    let busy = gameField.querySelectorAll('.busy') ;
    const victory= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]

    victory.forEach((item)=>{
        if(td[item[0]].innerText==td[item[1]].innerText&&
            td[item[1]].innerText==td[item[2]].innerText&&
            td[item[1]].innerText!=''){
            turnOrder.innerText = `${td[item[0]].innerText} win` ;
            gameField.removeEventListener('click',turn);
        }else if(busy.length==td.length){
            turnOrder.innerText = 'draw' ;
            gameField.removeEventListener('click',turn);
        } 
    })
}



document.addEventListener('click',start);
