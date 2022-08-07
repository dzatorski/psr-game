const paperChoice = 
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
