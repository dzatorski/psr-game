/*
const game = () => {
  let playerScore = 0;
  let cpuScore = 0;
  for (let i = 0; i < 5; i++) {
    const gameArray = [`paper`, `scissors`, `rock`];
    let cpuChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
    let playerChoice = String(prompt(`Write rock, paper or scissors`));
    let player = String(playerChoice).toLowerCase();
    if (cpuChoice === `rock` && player === `rock`) {
    } else if (cpuChoice === `rock` && player === `paper`) {
      playerScore++;
    } else if (cpuChoice === `rock` && player === `scissors`) {
      cpuScore++;
    } else if (cpuChoice === `paper` && player === `paper`) {
    } else if (cpuChoice === `paper` && player === `scissors`) {
      playerScore++;
    } else if (cpuChoice === `paper` && player === `rock`) {
      cpuScore++;
    } else if (cpuChoice === `scissors` && player === `scissors`) {
    } else if (cpuChoice === `scissors` && player === `paper`) {
      cpuScore++;
    } else if (cpuChoice === `scissors` && player === `rock`) {
      playerScore++;
    }
  } 
  if (playerScore > cpuScore) {
    console.log(`You won ${playerScore} to ${cpuScore}`);
  } else if (playerScore === cpuScore) {
    console.log(`You drew ${playerScore} to ${cpuScore}`);
  } else if (playerScore < cpuScore) {
    console.log(`You lost ${playerScore} to ${cpuScore}`);
  }
};
game();
*/
// Playing a game
const result = document.querySelector(`.won-lose`);
const pointsCounter = document.querySelector(`.results`);
const gameArray = [`paper`, `scissors`, `rock`];
let points = [0, 0];
pointsCounter.textContent = `${points[0]} : ${points[1]}`;
const showPoints = () => {
  pointsCounter.textContent = `${points[0]} : ${points[1]}`;
  if (points[0] > 4) {
    pointsCounter.textContent = `You won ${points[0]} : ${points[1]}`;
  } else if (points[1] > 4) {
    pointsCounter.textContent = `You lost ${points[0]} : ${points[1]}`;
  }
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
  let cpuChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
  console.log(cpuChoice);
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
  } else result.textContent = `Game ended`;
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
