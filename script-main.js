const toggleStart = document.querySelector(".play-button");
const startPlayBtn = document.querySelector(".play-button button");
const gameStart = document.querySelector(".score");
const gameMainBox = document.querySelector(".ingame-box");
const quitButton = document.querySelector(".quit_btn");
const playerButtons = document.querySelectorAll(".player_btns button");
const roundNumberDisplay = document.querySelector(".game_round span");
const playerWinDisplay = document.querySelector(".player_win");
const computerWinDisplay = document.querySelector(".computer_win");
const resetBtn = document.querySelector(".reset_btn");
let userScore = 0;
let computerScore = 0;
let roundResult = "";

const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameStart.classList.toggle("visible");
  gameMainBox.classList.toggle("visible");
  quitButton.classList.toggle("visible");
  resetBtn.classList.toggle("visible");
};

const resetGame = () => {};

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

const calcUserScore = () => {
  return (playerWinDisplay.textContent = userScore);
};

const calcComputerScore = () => {
  computerWinDisplay.textContent = computerScore;
};

const setTimeOut = () => {
  setTimeout;
};

//who won the game function
const checkGameConditions = () => {
  if (userScore >= 5) {
    return alert("You win");
  } else if (computerScore >= 5) {
    return alert("You Lost");
  }
};

playerButtons.forEach((button) => {
  // return the round result
  button.addEventListener("click", () => {
    const user = button.id;
    computerChoice = calcComputerChoice();
    calcGameRound(user, computerChoice);
  });
});

playerButtons.forEach((button) => {
  button.addEventListener("click", calcUserScore);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", calcComputerScore);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", getRoundNumber);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", checkGameConditions);
});

startPlayBtn.addEventListener("click", startMainGame);
quitButton.addEventListener("click", startMainGame);
