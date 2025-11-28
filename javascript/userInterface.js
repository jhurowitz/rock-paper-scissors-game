// Create a visual for rock, paper, and scissors
// Include an image and button for each choice
let rock = document.createElement('div');
rock.classList.add('rock-container');

let rockImage = document.createElement('img');
rockImage.classList.add('rock-image');
rockImage.src = "./images/rock.png";
rockImage.style.width = '200px';
rockImage.style.height = '200px';

let rockButton = document.createElement('button');
rockButton.classList.add('rock-button');
rockButton.style.backgroundColor = 'brown';
rockButton.style.color = 'white';
rockButton.style.fontSize = '16px'
rockButton.style.padding = '15px 25px';
rockButton.textContent = 'Play Rock!';
rockButton.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

rock.appendChild(rockImage);
rock.appendChild(rockButton);

rock.style.display = 'flex';
rock.style.flexDirection = 'column';
rock.style.justifyContent = 'center';
rock.style.alignItems = 'center';
rock.style.gap = '25px';

let paper = document.createElement('div');
paper.classList.add('paper-container');

let paperImage = document.createElement('img');
paperImage.classList.add('paper-image');
paperImage.src = "./images/paper.jpg";
paperImage.style.width = '200px';
paperImage.style.height = '200px';

let paperButton = document.createElement('button');
paperButton.classList.add('paper-button');
paperButton.style.backgroundColor = 'peachpuff';
paperButton.style.color = 'black';
paperButton.style.fontSize = '16px'
paperButton.style.padding = '15px 25px';
paperButton.textContent = 'Play Paper!';
paperButton.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

paper.appendChild(paperImage);
paper.appendChild(paperButton);

paper.style.display = 'flex';
paper.style.flexDirection = 'column';
paper.style.justifyContent = 'center';
paper.style.alignItems = 'center';
paper.style.gap = '25px';

let scissors = document.createElement('div');
scissors.classList.add('scissors-container');

let scissorsImage = document.createElement('img');
scissorsImage.classList.add('scissors-image');
scissorsImage.src = "./images/scissors.jpg";
scissorsImage.style.width = '200px';
scissorsImage.style.height = '200px';

let scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors-button');
scissorsButton.style.backgroundColor = 'orange';
scissorsButton.style.color = 'black';
scissorsButton.style.fontSize = '16px'
scissorsButton.style.padding = '15px 25px';
scissorsButton.textContent = 'Play Scissors!';
scissorsButton.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});

scissors.appendChild(scissorsImage);
scissors.appendChild(scissorsButton);

scissors.style.display = 'flex';
scissors.style.flexDirection = 'column';
scissors.style.justifyContent = 'center';
scissors.style.alignItems = 'center';
scissors.style.gap = '25px';

// Create a container for all of the options
let options = document.createElement('div');
options.appendChild(rock);
options.appendChild(paper);
options.appendChild(scissors);

options.style.display = 'flex';
options.style.justifyContent = 'center';
options.style.alignItems = 'center';
options.style.gap = '25px';
options.style.marginTop = '10px';

// Create a visual score tracker
let gameScore = document.createElement('h1');
gameScore.id = ('game-score');
gameScore.textContent = 'Game to 5, best of luck!';

// Create an area for text breakdown of each game
let gameBreakdown = document.createElement('div');
gameBreakdown.id = 'game-breakdown';

let gameChoices = document.createElement('h2');
gameChoices.id = 'game-choices';
gameChoices.style.textAlign = 'center';

let gameResult = document.createElement('h2');
gameResult.id = 'game-result';
gameResult.style.textAlign = 'center';

gameBreakdown.appendChild(gameChoices);
gameBreakdown.appendChild(gameResult);

gameBreakdown.style.display = 'none';
gameBreakdown.style.flexDirection = 'column';
gameBreakdown.style.alignItems = 'center';

// Add to the main container and style accordingly
let game = document.createElement('div');
game.classList.add('game-container');

game.appendChild(gameScore);
game.appendChild(gameBreakdown);
game.appendChild(options);

game.style.display = 'flex';
game.style.flexDirection = 'column';
game.style.justifyContent = 'center';
game.style.alignItems = 'center';
game.style.gap = '15px';

document.body.appendChild(game);