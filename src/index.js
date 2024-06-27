import * as brain from './brain.js';
import * as gbe from './games/game-brain-even.js';

const getGameType = (type) => {
  const gameType = [];
  if (type === 'gbe') {
    gameType.push(...gbe.getGameAnsver());
  }
  return gameType;
};

export default (shortName) => {
  console.log('Welcome to the Brain Games!');
  const userName = brain.getAnsver('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  gbe.getGameRules();
  let j = 0;
  for (let i = 0; i < 3; i += 1) {
    const ansver = getGameType(shortName);
    console.log(ansver[0]);
    if (ansver[0] === ansver[1]) {
      j += 1;
      console.log('Correct!');
    } else {
      console.log(`'${ansver[0]}' is wrong answer ;(. Correct answer was '${ansver[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (j === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
