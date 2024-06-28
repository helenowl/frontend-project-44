import * as brain from './brain.js';
import * as gbe from './games/game-brain-even.js';
import * as gbc from './games/game-brain-calc.js';
import * as gbg from './games/game-brain-gcd.js';
import * as gbp from './games/game-brain-progression.js';

const getGameType = (type) => {
  const gameType = [];
  if (type === 'gbe') {
    gameType.push(...gbe.getGameAnsver());
  } else if (type === 'gbc') {
    gameType.push(...gbc.getGameAnsver());
  } else if (type === 'gbg') {
    gameType.push(...gbg.getGameAnsver());
  } else if (type === 'gbp') {
    gameType.push(...gbp.getGameAnsver());
  }
  return gameType;
};

const getGameRulesType = (type) => {
  if (type === 'gbe') {
    gbe.getGameRules();
  } else if (type === 'gbc') {
    gbc.getGameRules();
  } else if (type === 'gbg') {
    gbg.getGameRules();
  } else if (type === 'gbp') {
    gbp.getGameRules();
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
