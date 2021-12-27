// computer play function for random number from 1 to 3

function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;
  return num;
}
// if condition for turning random numbers from computerPlay function to strings

if (computerPlay() === 1) {
  console.log(computerPlay());
  console.log("Rock");
} else if (computerPlay() === 2) {
  console.log("Paper");
} else {
  console.log("Scissors");
}
