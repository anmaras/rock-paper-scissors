const toggleStart = document.querySelector(".play-button");
const startPlayBtn = document.querySelector(".play-button button");
const gameStart = document.querySelector(".score");
const gameMainBox = document.querySelector(".ingame-box");
const quitButton = document.querySelector(".quit_btn");
const playerButtons = document.querySelectorAll(".player_btns button");

const startMainGame = () => {
  toggleStart.classList.toggle("hidden");
  gameStart.classList.toggle("visible");
  gameMainBox.classList.toggle("visible");
  quitButton.classList.toggle("visible");
};

const computer = () => {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return (number = "Rock");
  } else if (number === 2) {
    return (number = "Scissors");
  } else return (number = "Paper");
};

const playRound = (user, computerChoice) => {
  if (user === "Rock" && computerChoice === "Scissors") {
    return console.log("win");
  } else if (user === "Scissors" && computerChoice === "Paper") {
    return console.log("win");
  } else if (user === "Paper" && computerChoice === "Rock") {
    return console.log("win");
  } else if (user === computerChoice) {
    return console.log("Draw");
  } else return console.log("Lose");
};

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const user = button.id;
    console.log(user);
    const computerChoice = computer();
    console.log(computerChoice);
    playRound(user, computerChoice);
  });
});

startPlayBtn.addEventListener("click", startMainGame);
quitButton.addEventListener("click", startMainGame);
