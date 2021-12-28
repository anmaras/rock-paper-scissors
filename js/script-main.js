const computerSelection = computerPlay();
console.log(computerSelection);
let playerSelection = prompt("Rock Paper Scissor");

// if condition for avoiding type error with null when using case incensitive prompt!

if (playerSelection != null) {
  playerSelection = playerSelection.toLowerCase();
}
if (playerSelection === "") {
  alert("Dude that's empty, type something!   :( ");
} else if (playerSelection === null) {
  alert("Thank you for not playing    -__-");
} else if (
  playerSelection !== "rock" &&
  playerSelection !== "paper" &&
  playerSelection !== "scissor"
) {
  alert("What the hell did you typed?");
}
console.log(playerSelection);

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
    return "draw";
  } else if (user === "rock" && computer === "scissor") {
    return "You Won!" + `${user} wins ${computer}`;
  } else if (user === "paper" && computer === "rock") {
    return "You Won!" + `${user} wins ${computer}`;
  } else if (user === "scissor" && computer === "paper") {
    return "You Won!" + `${user} wins ${computer}`;
  } else if (user === "scissor" && computer === "rock") {
    return `You lost ${computer} beats ${user}`;
  } else if (user === "rock" && computer === "paper") {
    return `You lost ${computer} beats ${user}`;
  } else if (user === "paper" && computer === "scissor") {
    return `You lost ${computer} beats ${user}`;
  } else {
    return `Abort`;
  }
}
console.log(playAround(playerSelection, computerSelection));
