// computer play function for random number from 1 to 3 with if condition to turn to strings

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(computerPlay());
