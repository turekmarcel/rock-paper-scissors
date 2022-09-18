const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const options = document.querySelectorAll('button');

const playerHand = document.getElementById('player-hand')
const computerHand = document.getElementById('computer-hand')

let computerScore = 0;
let playerScore = 0;

const resultText = document.querySelector('h1')

options.forEach(option => option.addEventListener('click', (e) => {
    playerChoice = e.target.id;

    if(playerChoice === 'rock'){
        playerHand.src = 'rock.svg'
    }
    if(playerChoice === 'paper'){
        playerHand.src = 'paper.svg'
    }
    if(playerChoice === 'scissors'){
        playerHand.src = 'scissors.svg'
    }

    randomIdGenerator()
    gameResult()
}))

function randomIdGenerator(){
    computerChoice = Math.floor(Math.random(3) * options.length +1)
    console.log(computerChoice)

    if(computerChoice === 1){
        computerHand.src = "rock.svg"
        
    }
    if(computerChoice === 2){
        computerHand.src = "paper.svg"
    }
    if(computerChoice === 3){
        computerHand.src = "scissors.svg"
    }
}

function gameResult(){

    // DRAW

    if(computerChoice === 1 && playerChoice === 'rock'){
        resultText.innerHTML = 'Draw!'
    }
    if(computerChoice === 2 && playerChoice === 'paper'){
        resultText.innerHTML = 'Draw!'
    }
    if(computerChoice === 3 && playerChoice === 'scissors'){
        resultText.innerHTML = 'Draw!'
    }

    // LOSE

    if(computerChoice === 1 && playerChoice === 'scissors'){
        computerScore++
        computerScoreDisplay.innerHTML = computerScore;
        resultText.innerHTML = 'You Lose!'
    }
    if(computerChoice === 2 && playerChoice === 'rock'){
        computerScore++
        computerScoreDisplay.innerHTML = computerScore;
        resultText.innerHTML = 'You Lose!'
    }
    if(computerChoice === 3 && playerChoice === 'paper'){
        computerScore++
        computerScoreDisplay.innerHTML = computerScore;
        resultText.innerHTML = 'You Lose!'
    }

    // WIN

    if(computerChoice === 1 && playerChoice === 'paper'){
        playerScore++
        playerScoreDisplay.innerHTML = playerScore;
        resultText.innerHTML = 'You Win!'
    }
    if(computerChoice === 2 && playerChoice === 'scissors'){
        playerScore++
        playerScoreDisplay.innerHTML = playerScore;
        resultText.innerHTML = 'You Win!'
    }
    if(computerChoice === 3 && playerChoice === 'rock'){
        playerScore++
        playerScoreDisplay.innerHTML = playerScore;
        resultText.innerHTML = 'You Win!'
    }
}