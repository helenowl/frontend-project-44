import * as brain from './brain.js';
import * as gbe from './games/game-brain-even.js';
import * as gbc from './games/game-brain-calc.js';

const getGameType = (type) => {
  const gameType = [];
  if (type === 'gbe') {
    gameType.push(...gbe.getGameAnsver());
  } else if (type === 'gbc') {
    gameType.push(...gbc.getGameAnsver());
  }
  return gameType;
};

const getGameRulesType = (type) => {
  if (type === 'gbe') {
    gbe.getGameRules();
  } else if (type === 'gbc') {
    gbc.getGameRules();
  }
};

export default (shortName) => {
  console.log('Welcome to the Brain Games!');
  const userName = brain.getAnsver('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  getGameRulesType(shortName);
  let j = 0;
  for (let i = 0; i < 3; i += 1) {
    const ansver = getGameType(shortName);
    const userAnsver = ansver.at(0);
    const trueAnsver = ansver.at(1);
    if (userAnsver === trueAnsver) {
      j += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnsver}' is wrong answer ;(. Correct answer was '${trueAnsver}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (j === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
