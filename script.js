const result = document.querySelector(`.won-lose`);
const pointsCounter = document.querySelector(`.results`);
const gameArray = [`paper`, `scissors`, `rock`];
let cpuChoice = ``;
let points = [0, 0];
pointsCounter.textContent = `${points[0]} : ${points[1]}`;
const showPoints = () => {
  pointsCounter.textContent = `${points[0]} : ${points[1]}`;
  if (points[0] > 4) {
    pointsCounter.textContent = `You won ${points[0]} : ${points[1]}`;
    document.body.classList.add(`win`);
  } else if (points[1] > 4) {
    pointsCounter.textContent = `You lost ${points[0]} : ${points[1]}`;
    document.body.classList.add(`lost`);
  }
};
const resetGame = () => {
  points = [0, 0];
  document.getElementsByClassName(`won-lose`).textContent = `Game not started`;
  document.body.background = `#ecccb2`;
  pointsCounter.textContent = `${points[0]} : ${points[1]}`;
  document.getElementById(`cpu`).src = "./images/question-mark.png";
};
const showCpuChoice = () => {
  if (cpuChoice === `rock`) {
    document.getElementById(`cpu`).src = "./images/fist.png";
  } else if (cpuChoice === `paper`) {
    document.getElementById(`cpu`).src = "./images/palm-of-hand.png";
  } else if (cpuChoice === `scissors`) {
    document.getElementById(`cpu`).src = "./images/scissor.png";
  }
};
const gamePlay = () => {
  cpuChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
  if (points[0] < 5 && points[1] < 5) {
    if (playerChoice === `rock` && cpuChoice === `rock`) {
      result.textContent = `It's a draw`;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `rock` && cpuChoice === `paper`) {
      result.textContent = `You lost this round`;
      points[1] += 1;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `rock` && cpuChoice === `scissors`) {
      result.textContent = `You won this round`;
      points[0] += 1;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `paper` && cpuChoice === `scissors`) {
      result.textContent = `You lost this round`;
      points[1] += 1;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `paper` && cpuChoice === `rock`) {
      result.textContent = `You won this round`;
      points[0] += 1;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `paper` && cpuChoice === `paper`) {
      result.textContent = `It's a draw`;
      showCpuChoice();
    } else if (playerChoice === `scissors` && cpuChoice === `scissors`) {
      result.textContent = `It's a draw`;
      showCpuChoice();
    } else if (playerChoice === `scissors` && cpuChoice === `paper`) {
      result.textContent = `You won this round`;
      points[0] += 1;
      showPoints();
      showCpuChoice();
    } else if (playerChoice === `scissors` && cpuChoice === `rock`) {
      result.textContent = `You lost this round`;
      points[1] += 1;
      showPoints();
      showCpuChoice();
    }
  } else result.textContent = `Game ended, reset to play again`;
};

let playerChoice = ``;
const playerChoiceRock = document.querySelector(`.rock`);
playerChoiceRock.addEventListener(`click`, () => {
  playerChoice = `rock`;
  gamePlay();
});

const playerChoicePaper = document.querySelector(`.paper`);
playerChoicePaper.addEventListener(`click`, () => {
  playerChoice = `paper`;
  gamePlay();
});

const playerChoiceScissors = document.querySelector(`.scissors`);
playerChoiceScissors.addEventListener(`click`, () => {
  playerChoice = `scissors`;
  gamePlay();
});

const resetButton = document.querySelector(`.reset`);
resetButton.addEventListener(`click`, () => {
  resetGame();
});
