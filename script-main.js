const toggleStart = document.querySelector(".play-button");
const startPlayBtn = document.querySelector(".play-button button");
const gameStart = document.querySelector(".score");
const gameMainBox = document.querySelector(".ingame-box");
const quitButton = document.querySelector(".quit_btn");
const playerButtons = document.querySelectorAll(".player_btns button");
const roundNumberDisplay = document.querySelector(".game_round span");
const playerWinDisplay = document.querySelector(".player_win");
const computerWinDisplay = document.querySelector(".computer_win");
let userScore = 0;
let computerScore = 0;
let roundResult = "";

const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameStart.classList.toggle("visible");
  gameMainBox.classList.toggle("visible");
  quitButton.classList.toggle("visible");
};

//computer choice result
const calcComputerChoice = () => {
  let number = Math.floor(Math.random() * 3 + 1);
  if (number === 1) {
    return (number = "Rock");
  } else if (number === 2) {
    return (number = "Scissors");
  } else return (number = "Paper");
};

//Game round result
const calcGameRound = (user, computerChoice) => {
  if (user === "Rock" && computerChoice === "Scissors") {
    userScore++;
    return (roundResult = `Win`);
  } else if (user === "Scissors" && computerChoice === "Paper") {
    userScore++;
    return (roundResult = `Win`);
  } else if (user === "Paper" && computerChoice === "Rock") {
    userScore++;
    return (roundResult = `Win`);
  } else if (user === computerChoice) {
    return (roundResult = `Draw`);
  } else roundResult = `Lose`;
  computerScore++;
};

const getRoundNumber = () => {
  return roundNumberDisplay.textContent++;
};

//who won the game function
const checkRoundConditions = () => {
  if (userScore >= 5) {
    return alert("You win");
  } else if (computerScore >= 5) {
    return alert("You Lost");
  }
};

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const user = button.id;
    computerChoice = calcComputerChoice();
    calcGameRound(user, computerChoice);
    playerWinDisplay.textContent = userScore;
    computerWinDisplay.textContent = computerScore;
    console.log(roundResult);
    // console.log(`Player ${user}`);
    console.log(`Computer ${computerChoice}`);
    // console.log(`Score ${userScore} - ${computerScore}`);
  });
});

// playerButtons.forEach((button) => {
//   button.addEventListener("click", checkRoundConditions);
// });

startPlayBtn.addEventListener("click", startMainGame);
quitButton.addEventListener("click", startMainGame);
