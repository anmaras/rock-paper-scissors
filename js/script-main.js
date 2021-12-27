// computer play function for random number from 1 to 3 with if condition to return to string names

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

let playerSelection = prompt("Rock Paper Scissor");
playerSelection =
  playerSelection.charAt(0).toUpperCase() +
  playerSelection.substring(1).toLowerCase();
console.log(playerSelection);
let computerSelection = computerPlay();
console.log(computerSelection);

// function that calulates the result of one round

function getPlayRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
console.log(getPlayRound(playerSelection, computerSelection));
