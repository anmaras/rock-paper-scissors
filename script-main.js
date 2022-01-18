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
const mainBoardButton = document.querySelector("#main-board button");
const infoBoardButton = document.querySelector(".info_board");
const infoDiv = document.querySelector("#info-board div");

let infoNewDiv = "";
let userScore = 0;
let computerScore = 0;
let roundResult = "";

//function that change the button bg color when clicked
const getButtonColor = () => {
  event.target.style.backgroundColor = "red";
};

// game start function turn visibility on
const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameStart.classList.toggle("visible");
  gameMainBox.classList.toggle("visible");
  quitButton.classList.toggle("visible");
  resetBtn.classList.toggle("visible");
  infoBoardButton.classList.toggle("visible");
};

// Info board add new div element
const addInfoBoardDiv = () => {
  infoDiv.textContent = roundResult;
};

const resetInfoBoardDiv = () => {
  infoDiv.textContent = "";
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

//Game round result function
const calcGameRound = (user, computerChoice) => {
  if (user === "Rock" && computerChoice === "Scissors") {
    userScore += 1;
    return (roundResult = `${user} beats ${computerChoice} You won the round!`);
  } else if (user === "Scissors" && computerChoice === "Paper") {
    userScore += 1;
    return (roundResult = `${user} beats ${computerChoice} You won the round!`);
  } else if (user === "Paper" && computerChoice === "Rock") {
    userScore += 1;
    return (roundResult = `${user} beats ${computerChoice} You won the round!`);
  } else if (user === computerChoice) {
    return (roundResult = `Draw!`);
  } else roundResult = `${computerChoice} beats ${user} You lost the round!`;
  computerScore++;
};

// Functions that calculate round and score
const getRoundNumber = () => {
  roundNumberDisplay.textContent++;
  if (userScore >= 5 || computerScore >= 5) {
    playerButtons.forEach((button) => {
      button.removeEventListener("click", getRoundNumber);
    });
  }
};

const calcUserScore = () => {
  playerWinDisplay.textContent = userScore;
  if (userScore >= 5 || computerScore >= 5) {
    playerButtons.forEach((button) => {
      button.removeEventListener("click", calcUserScore);
    });
  }
};
const calcComputerScore = () => {
  computerWinDisplay.textContent = computerScore;
  if (userScore >= 5 || computerScore >= 5) {
    playerButtons.forEach((button) => {
      button.removeEventListener("click", calcComputerScore);
    });
  }
};

//game reset function
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  roundNumberDisplay.textContent = 1;
  playerWinDisplay.textContent = userScore;
  computerWinDisplay.textContent = computerScore;
};

//who won the game function
const checkGameConditions = () => {
  if (userScore >= 5) {
    return (infoDiv.textContent = "YOU WON THE GAME");
  } else if (computerScore >= 5) {
    return (infoDiv.textContent = "YOU LOST THE GAME");
  }
};

//eventListeners

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const user = button.id;
    computerChoice = calcComputerChoice();
    calcGameRound(user, computerChoice);
    addInfoBoardDiv();
    checkGameConditions();
  });
});
playerButtons.forEach((button) => {
  button.addEventListener("click", getRoundNumber);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", calcUserScore);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", calcComputerScore);
});

playerButtons.forEach((button) => {
  button.addEventListener("click", getButtonColor);
});

// playerButtons.forEach((button) => {
//   button.removeEventListener("click", getButtonColor);
// });

startPlayBtn.addEventListener("click", startMainGame);

quitButton.addEventListener("click", () => {
  startMainGame();
  resetGame();
  resetInfoBoardDiv();
});

resetBtn.addEventListener("click", () => {
  resetGame();
  resetInfoBoardDiv();
  playerButtons.forEach((button) => {
    button.addEventListener("click", getRoundNumber);
  });
  playerButtons.forEach((button) => {
    button.addEventListener("click", calcUserScore);
  });
  playerButtons.forEach((button) => {
    button.addEventListener("click", calcComputerScore);
  });
});
