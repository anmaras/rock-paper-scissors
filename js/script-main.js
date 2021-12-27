const playerSelection = prompt("Rock Paper Scissor");
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);

// computer play function for random number from 1 to 3 with if condition to return to string names

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// // function that calulates the result of one round

function playAround(user, computer) {
  if (user === computer) {
    return "Draw";
  } else if (user === "rock" && computer === "scissor") {
    return `You Won! ${user} beats ${computer}`;
  } else if (user === "paper" && computer === "rock") {
    return `You Won! ${user} beats ${computer}`;
  } else if (user === "scissor" && computer === "paper") {
    return `You Won! ${user} beats ${computer}`;
  } else if (user === "scissor" && computer === "rock") {
    return `You lost ${computer} beats ${user}`;
  } else if (user === "rock" && computer === "paper") {
    return `You lost ${computer} beats ${user}`;
  } else if (user === "paper" && computer === "scissor") {
    return `You lost ${computer} beats ${user}`;
  } else {
    return `Thats not right!`;
  }
}
console.log(playAround(playerSelection, computerSelection));
