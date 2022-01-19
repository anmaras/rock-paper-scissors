const toggleStart = document.querySelector(".play-button");
const playButton = toggleStart.firstElementChild;
const gameAndRoundOutcome = document.getElementById("score");
const playerAndComputerButtons = document.getElementById("ingame");
const playerButtons = document.querySelectorAll(".player_btns button");
const roundNumber = document.querySelector(".game_round span");
const playerWinNumber = document.querySelector(".player_win");
const computerWinNumber = document.querySelector(".computer_win");
const playAgainButton = document.querySelector(".reset_btn");
const mainBoardButton = document.querySelector("#main-board button");
const infoBoardButton = document.querySelector(".info_board");
const infoText = document.querySelector("#info-board div");
const computerButtons = document.querySelector(".computer_btns");
const playerMainButtons = document.querySelector(".player_btns");
const playerButtonTextInArray = ["Rock", "Scissors", "Paper"];
let randomNumber = Math.floor(Math.random() * 3 + 1);
let userScore = 0;
let computerScore = 0;
let roundResult = "";

//function that change the player button bg color when clicked
const getPlayerButtonColor = () => {
  let btn = event.target.id;
  for (let i = 0; i < playerButtonTextInArray.length; i++) {
    if (playerButtonTextInArray[i] === btn) {
      playerMainButtons.children[i].style.backgroundColor = "#3472c2";
    } else playerMainButtons.children[i].style.backgroundColor = "#84c234";
  }
};

// game start function turn visibility on
const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameAndRoundOutcome.classList.toggle("visible");
  playerAndComputerButtons.classList.toggle("visible");
  infoBoardButton.classList.toggle("visible");
};
// game after restart function
const restartGame = () => {
  playerAndComputerButtons.classList.toggle("visible");
  playAgainButton.classList.toggle("visible");
};

// Info board add new div element
const addInfoBoardDiv = () => {
  infoText.textContent = roundResult;
};
// Reset info board
const resetInfoBoardDiv = () => {
  infoText.textContent = "";
};

//computer choice result
const calcComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return (randomNumber = "Rock");
  } else if (randomNumber === 2) {
    return (randomNumber = "Scissors");
  } else if (randomNumber === 3) {
    return (randomNumber = "Paper");
  }
};

//computer choice color
const getComputerChoiceColor = () => {
  for (let i = 0; i < playerButtonTextInArray.length; i++) {
    if (playerButtonTextInArray[i] === computerChoice) {
      computerButtons.children[i].style.backgroundColor = "#c23440";
    } else computerButtons.children[i].style.backgroundColor = "#84c234";
  }
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
  roundNumber.textContent++;
  if (userScore >= 5 || computerScore >= 5) {
    playerButtons.forEach((button) => {
      button.removeEventListener("click", getRoundNumber);
    });
  }
};

const calcUserScore = () => {
  playerWinNumber.textContent = userScore;
  console.log(playerWinNumber);
  if (userScore >= 5 || computerScore >= 5) {
    playerButtons.forEach((button) => {
      button.removeEventListener("click", calcUserScore);
    });
  }
};
const calcComputerScore = () => {
  computerWinNumber.textContent = computerScore;
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
  roundNumber.textContent = 1;
  playerWinNumber.textContent = userScore;
  console.log(playerWinNumber);
  computerWinNumber.textContent = computerScore;
};
//button colors reset function

const getColorReset = () => {
  for (let i = 0; i <= 2; i++) {
    playerMainButtons.children[i].style.backgroundColor = "#84c234";
    computerButtons.children[i].style.backgroundColor = "#84c234";
  }
};

//who won the game function
const checkGameConditions = () => {
  for (let i = 0; i <= 2; i++) {
    if (userScore >= 5) {
      getAfterGameTitle();
      return (infoText.textContent = "YOU WON THE GAME!");
    } else if (computerScore >= 5) {
      getAfterGameTitle();
      return (infoText.textContent = "YOU LOST THE GAME!");
    }
  }
};

//after game end
const getAfterGameTitle = () => {
  playerAndComputerButtons.classList.toggle("visible");
  playAgainButton.classList.toggle("visible");
};

//eventListeners

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const user = button.id;
    computerChoice = calcComputerChoice();
    calcGameRound(user, computerChoice);
    addInfoBoardDiv();
    checkGameConditions();
    getPlayerButtonColor();
    getComputerChoiceColor();
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

playButton.addEventListener("click", startMainGame);

playAgainButton.addEventListener("click", () => {
  resetGame();
  resetInfoBoardDiv();
  getColorReset();
  restartGame();
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
