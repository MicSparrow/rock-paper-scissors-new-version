const threeButtons = document.querySelectorAll('div.threeButtons button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const roundResult = document.querySelector('#roundResult');
const finalResult = document.querySelector('#finalResult');
const playAgain = document.querySelector('#again');

let Choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerIsPlaying() {
  let compChoice = Choices[Math.floor(Math.random() * Choices.length)];
  return compChoice;
}

function gameStart() {
  threeButtons.forEach(button => {
    button.addEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  playerSelection = (e.target.id)
  playRound(playerSelection, computerIsPlaying());
}

gameStart();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "Computer wins!";
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints.textContent = ++playerScore;
    roundResult.textContent = "Player wins!";
    playerChoice.textContent = "Paper";
    computerChoice.textContent = "Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerPoints.textContent = ++playerScore;
    roundResult.textContent = "Player wins!";
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "Computer wins!";
    layerChoice.textContent = "Paper";
    computerChoice.textContent = "Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerPoints.textContent = ++playerScore;
    roundResult.textContent = "Player wins!";
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "Computer wins!";
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Rock";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    playerPoints.textContent = ++playerScore;
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "It is a tie!";
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    playerPoints.textContent = ++playerScore;
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "It is a tie!";
    playerChoice.textContent = "Paper";
    computerChoice.textContent = "Paper";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    playerPoints.textContent = ++playerScore;
    computerPoints.textContent = ++computerScore;
    roundResult.textContent = "It is a tie!";
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Scissors";
  }
  winnerCheck(playerScore, computerScore);
}

function winnerCheck(playerScore, computerScore) {
  if (computerScore == 5 && playerScore == 5) {
    finalResult.textContent = "The game is a tie!";
    threeButtons.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  } else if (computerScore == 5) {
    finalResult.textContent = "You lost the whole game!";
    threeButtons.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  } else if (playerScore == 5) {
    finalResult.textContent = "You win the whole game!";
    threeButtons.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  }
}


function resetGame() {
  playAgain.addEventListener('click', () =>
    location.reload());
}

resetGame();
