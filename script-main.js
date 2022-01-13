const toggleStart = document.querySelector(".play-button");
const startPlayBtn = document.querySelector(".play-button button");
const gameStart = document.querySelector(".score");
const gameMainBox = document.querySelector(".ingame-box");
const quitButton = document.querySelector(".quit_btn");
const playerButtons = document.querySelector(".player_btns");
const playerRockSelection = playerButtons.children[0];
const playerScissorsSelection = playerButtons.children[1];
const playerPaperSelection = playerButtons.children[2];

const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameStart.classList.toggle("visible");
  gameMainBox.classList.toggle("visible");
  quitButton.classList.toggle("visible");
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return (number = "Rock");
  } else if (number === 2) {
    return (number = "Scissors");
  } else return (number = "Paper");
};

playerRockSelection.addEventListener("click", getPlayerChoice);
startPlayBtn.addEventListener("click", startMainGame);
quitButton.addEventListener("click", startMainGame);

console.log(getPlayerChoice());
