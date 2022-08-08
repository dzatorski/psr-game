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

const gamePlay = () => {
  const gameArray = [`paper`, `scissors`, `rock`];
  let cpuChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
  console.log(cpuChoice);
  if (playerChoice === `rock` && cpuChoice === `rock`) {
    result.textContent = `It's a draw`;
  } else if (playerChoice === `rock` && cpuChoice === `paper`) {
    result.textContent = `You lost this round`;
  } else if (playerChoice === `rock` && cpuChoice === `scissors`) {
    result.textContent = `You won this round`;
  } else if (playerChoice === `paper` && cpuChoice === `scissors`) {
    result.textContent = `You lost this round`;
  } else if (playerChoice === `paper` && cpuChoice === `rock`) {
    result.textContent = `You won this round`;
  } else if (playerChoice === `paper` && cpuChoice === `paper`) {
    result.textContent = `It's a draw`;
  } else if (playerChoice === `scissors` && cpuChoice === `scissors`) {
    result.textContent = `It's a draw`;
  } else if (playerChoice === `scissors` && cpuChoice === `paper`) {
    result.textContent = `You won this round`;
  } else if (playerChoice === `scissors` && cpuChoice === `rock`) {
    result.textContent = `You lost this round`;
  }
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
