const game = () => {
  for (let i = 0; i < 5; i++) {
    const gameArray = [`paper`, `scissors`, `rock`];
    let cpuChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
    let playerChoice = String(prompt(`Write rock, paper or scissors`));
    let player = String(playerChoice).toLowerCase();
    if (cpuChoice === `rock` && player === `rock`) {
      console.log(`It is a draw`);
    } else if (cpuChoice === `rock` && player === `paper`) {
      console.log(`You won`);
    } else if (cpuChoice === `rock` && player === `scissors`) {
      console.log(`You lost`);
    } else if (cpuChoice === `paper` && player === `paper`) {
      console.log(`Draw`);
    } else if (cpuChoice === `paper` && player === `scissors`) {
      console.log(`You won`);
    } else if (cpuChoice === `paper` && player === `rock`) {
      console.log(`You lost`);
    } else if (cpuChoice === `scissors` && player === `scissors`) {
      console.log(`Draw`);
    } else if (cpuChoice === `scissors` && player === `paper`) {
      console.log(`You lost`);
    } else if (cpuChoice === `scissors` && player === `rock`) {
      console.log(`You won`);
    }
  }
};

game();
