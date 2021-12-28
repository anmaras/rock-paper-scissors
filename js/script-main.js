let playerSelection = prompt("Rock Paper Scissor");

console.log("player " + playerSelection);
let computerSelection = computerPlay();
console.log("Computer " + computerSelection);
let roundResult = playAround(playerSelection, computerSelection);
// console.log(roundResult);
let playerWins = 0;
let draw = 0;
let computerWins = 0;

// computer play function for random number from 1 to 3 with if condition to return string names

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

//Conditions for "" and null choises and wrong words

if (playerSelection === "") {
  alert("Yo! that's empty, try to type something!");
} else if (playerSelection === null) {
  alert("Thank you for not playing    -__-");
} else if (
  playerSelection != "rock" &&
  playerSelection != "paper" &&
  playerSelection != "scissor"
) {
  alert("Thats not the correct words :/");
}

// function that calulates the result of one round

function playAround(user, computer) {
  if (user === computer) {
    return "Draw";
  } else if (user === "rock" && computer === "scissor") {
    return "You won!";
  } else if (user === "paper" && computer === "rock") {
    return "You won!";
  } else if (user === "scissor" && computer === "paper") {
    return "You won";
  } else if (user === "scissor" && computer === "rock") {
    return "You lost";
  } else if (user === "rock" && computer === "paper") {
    return "You lost";
  } else if (user === "paper" && computer === "scissor") {
    return "You lost";
  } else {
    return "That failed!";
  }
}
console.log(playAround(playerSelection, computerPlay()));
// console.log(playAround(playerSelection, computerPlay()));
// console.log(playAround(playerSelection, computerPlay()));
// console.log(playAround(playerSelection, computerPlay()));
// console.log(playAround(playerSelection, computerPlay()));

function roundScore() {
  if (roundResult == "Draw") {
    return (draw += 1);
  } else if (roundResult === "You won!") {
    return (playerWins += 1);
  } else {
    return (computerWins += 1);
  }
}
roundScore();
console.log(playerWins, computerWins, draw);
