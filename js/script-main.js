let playerScore = 0;
let computerScore = 0;
let draw = 0;

game();
function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock Paper Scissor");
    let computerSelection = computerPlay();
    // if condition for avoiding type error with null when using case incensitive prompt!
    if (playerSelection != null) {
      playerSelection = playerSelection.toLowerCase();
    }
    if (playerSelection === "") {
      alert("Dude that's empty, play something!   :( ");
    } else if (playerSelection === null) {
      alert("Thank you for not playing    -__-");
      {
        break;
      }
    } else if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissor"
    ) {
      alert("Please type Rock, Paper or Scissor");
    }

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
        draw += 1;
        return alert("It's a draw");
      } else if (user === "rock" && computer === "scissor") {
        playerScore += 1;
        return alert("You Won!" + `${user} wins ${computer}`);
      } else if (user === "paper" && computer === "rock") {
        playerScore += 1;
        return alert("You Won!" + `${user} wins ${computer}`);
      } else if (user === "scissor" && computer === "paper") {
        playerScore += 1;
        return alert("You Won!" + `${user} wins ${computer}`);
      } else if (user === "scissor" && computer === "rock") {
        computerScore += 1;
        return alert(`You lost ${computer} beats ${user}`);
      } else if (user === "rock" && computer === "paper") {
        computerScore += 1;
        return alert(`You lost ${computer} beats ${user}`);
      } else if (user === "paper" && computer === "scissor") {
        computerScore += 1;
        return alert(`You lost ${computer} beats ${user}`);
      } else {
        return alert(`Abort`);
      }
    }
    playAround(playerSelection, computerSelection);

    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
    console.log("Draw " + draw);
  }
}
