let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};





updateScoreElement();


// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }

const resetButtonElement = document.querySelector('.js-reset-score-button');

resetButtonElement.addEventListener('click', () => {    
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
})
let isAutoPlaying = false; 
let intervalid;
let buttonElement = document.querySelector('.js-auto-play-button');
buttonElement.addEventListener('click', () => {
    autoplay()
})
// const autoplay = () =>{

// };

function autoplay(){
    
    
    if(!isAutoPlaying){
       intervalid = setInterval(() => {
            const playWith = pickComputerMove();
            playGame(playWith);
        }, 1000 );
        isAutoPlaying = true;
        display();
        
    }else {
        clearInterval(intervalid);
        isAutoPlaying = false;
        display();
        
    }

}
const rockButtonElement = document.querySelector('.js-rock-button');
rockButtonElement.addEventListener('click', () => {
    playGame('rock');
});

const paperButtonElement = document.querySelector('.js-paper-button');
paperButtonElement.addEventListener('click', () => {
    playGame('paper');
});

const scissorsButtonElement = document.querySelector('.js-scissors-button');
scissorsButtonElement.addEventListener('click', () => {
    playGame('scissors');
});


function display(){
    if(isAutoPlaying === true){
        buttonElement.value = 'Stop Play';
    }else{buttonElement.value = 'Auto Play';}
}

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r' || event.key === 'R'){
        playGame('rock');
    }else if(event.key === 'p' || event.key === 'P'){
        playGame('paper');
    }else if(event.key === 's' || event.key === 'S'){
        playGame('scissors');
    }
});

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';    

    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'A Tie';
        }else if (computerMove === 'paper') {
            result = 'You win';
        }else if (computerMove === 'scissors') {
            result = 'You lose';
        }
         
    } else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'You lose';
        }else if (computerMove === 'paper') {
            result = 'A Tie';
        }else if (computerMove === 'scissors') {
            result = 'You win';
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You win';
        }else if (computerMove === 'paper') {
            result = 'You lose';
        }else if (computerMove === 'scissors') {
            result = 'A Tie'; 
        }
    }

    if(result === 'You win') {
        score.wins++
    }else if (result === 'You lose'){
        score.losses++
    }else{
        score.ties++
    };

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
<img class="move-icon" src="/imgs/${playerMove}-emoji.png" alt="rock emoji">
<img class="move-icon" src="/imgs/${computerMove}-emoji.png" alt="">
Computer`;
} 


function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}


function pickComputerMove () {
    const randomNumber = Math.random();

    let computerMove = '';
    
    if (randomNumber >=0 && randomNumber <1/3){
        computerMove = 'rock'
    }else if (randomNumber >=1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}