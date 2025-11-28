let humanScore = 0
let computerScore = 0
const WINNING_SCORE = 5;
const validChoices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors'
}

function getHumanChoice() {
    let choice = prompt('Choose rock, paper, or scissors. Type your choice below.').toLowerCase()
    
    if (validChoices.includes(choice)) {
        return choice
    } 
    else {
        return `Error, your input ${choice} is invalid`
    }
}

function playRound(humanChoice, computerChoice) {
    if (!validChoices.includes(humanChoice) || !validChoices.includes(computerChoice)) {
        return 'Error'
    }

    let gameBreakdown = document.getElementById('game-breakdown');
    if (gameBreakdown.style.display !== 'flex') {
        gameBreakdown.style.display = 'flex';
    }  

    displayChoices(humanChoice, computerChoice);
    displayResult(getGameResult(humanChoice, computerChoice));
}

function displayScore() {
    let score = document.getElementById('game-score');
    score.textContent = `Game to 5: You: ${humanScore} - Computer: ${computerScore}`;
}

function displayChoices(humanChoice, computerChoice) {
    let gameMessage = `You played ${humanChoice} against the computer's ${computerChoice}`;
    document.getElementById('game-choices').textContent = gameMessage;
}

function displayResult(result) {
    let resultMessage = "";

    if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
       resetGame(); 
       return;
    }
    else {
        if (result === 'win') {
            resultMessage = 'You won, nice job! Do it again!';
        }
        else if (result === 'tie') {
            resultMessage = 'You tied, not the worst thing. Try again!';
        }
        else if (result === 'loss') {
            resultMessage = 'You lost, try again!';
        }
        else {
            resultMessage = 'Error';
        }
    }

    let gameResultMessage = document.getElementById('game-result');
    gameResultMessage.textContent = resultMessage;

    displayScore();
}

function getGameResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie';
    }
    else {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            ++humanScore;
            return 'win';
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            ++humanScore;
            return 'win';
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            ++humanScore;
            return 'win';
        }
        else if (humanChoice === 'rock' && computerChoice === 'paper') {
            ++computerScore;
            return 'loss';
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            ++computerScore;
            return 'loss';
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;
            return 'loss';
        }
    }
}

function resetGame() {
    let gameScore = document.getElementById('game-score');
    let finalMessage = humanScore > computerScore ? 
        'Congrats on the win!' : 'Sorry about the loss!';
    gameScore.textContent = `${finalMessage}\nSelect again to start a new game!`

    let gameBreakdown = document.getElementById('game-breakdown');
    gameBreakdown.style.display = 'none';

    humanScore = 0;
    computerScore = 0;
}