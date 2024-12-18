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
    let humanChoice = prompt('rock paper or scissors?');
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

console.log(getHumanChoice())