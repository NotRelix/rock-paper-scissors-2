function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    const randomNumber = getRandomNumber();
    let choice = '';
    if (randomNumber === 1) {
        choice = 'rock';
    } else if (randomNumber === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function getHumanChoice() {
    let choice = '';
    if (humanChoice === 'rock') {
        choice = 'rock';
    } else if (humanChoice === 'paper') {
        choice = 'paper';
    } else if (humanChoice === 'scissors') {
        choice = 'scissors';
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let winner = ''
    if (humanChoice === computerChoice) {
        winner = 'tie'
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        winner = 'computer';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        winner = 'human';
    } else if (humanChoice === 'paper' && computerChoice == 'rock') {
        winner = 'human';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        winner = 'computer';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        winner = 'computer';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        winner = 'human';
    }
    return winner;
}

function changeScore() {
    score.textContent = `You: ${humanScore} vs Computer: ${computerScore}`
}

function playGame(e) {
    const humanSelection = e.target.id
    const computerSelection = getComputerChoice()
    let winner = playRound(humanSelection, computerSelection);

    if (humanScore < 5 && computerScore < 5) {
        if (winner === 'human') {
            humanScore++;
            display.textContent = `You won! ${humanSelection} vs ${computerSelection}`
        } else if (winner === 'computer') {
            computerScore++;
            display.textContent = `You lost! ${humanSelection} vs ${computerSelection}`
        } else {
            display.textContent = `Tie! ${humanSelection} vs ${computerSelection}`
        }
    }

    if (humanScore >= 5) {
        overallWinner.textContent = `Congratulations, you win! do you want to play again?`
    } else if (computerScore >= 5) {
        overallWinner.textContent = `Better luck next time! do you want to play again?`
    }

    changeScore()
}

const display = document.querySelector('.display');
const score = document.querySelector('.score')
const overallWinner = document.querySelector('.overall-winner')

let humanScore = 0;
let computerScore = 0;
document.addEventListener('click', playGame)
