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
        console.log(`It's a tie! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'tie'
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`Computer won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'computer';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`Player won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'human';
    } else if (humanChoice === 'paper' && computerChoice == 'rock') {
        console.log(`Player won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'human';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`Computer won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'computer';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`Computer won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'computer';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`Player won! Player(${humanChoice}) vs Computer(${computerChoice})`)
        winner = 'human';
    }
    return winner;
}

function printScore(humanScore, computerScore) {
    console.log(`Player(${humanScore}) vs Computer(${computerScore})`)
}

function playGame(e) {
    const humanSelection = e.target.id
    const computerSelection = getComputerChoice()
    let winner = playRound(humanSelection, computerSelection);

    if (winner === 'human') {
        humanScore++;
        display.textContent = `You won! ${humanSelection} vs ${computerSelection}`
    } else if (winner === 'computer') {
        computerScore++;
        display.textContent = `You lost! ${humanSelection} vs ${computerSelection}`
    } else {
        display.textContent = `Tie! ${humanSelection} vs ${computerSelection}`
    }

    printScore(humanScore, computerScore)
}

const display = document.querySelector('.display');

let humanScore = 0;
let computerScore = 0;
document.addEventListener('click', playGame)
