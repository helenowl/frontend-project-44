import * as brain from '../brain.js';

export function getTrueAnsver(num) {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
      // break;
    }
  }

  return 'yes';
}

export function getGameRules() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export function getGameAnsver() {
  const randomInt = brain.getRandomInt(100);
  console.log(`Question: ${randomInt}`);
  const numberQuestion = brain.getAnsver('Your answer: ');
  const trueAnsver = getTrueAnsver(randomInt);
  const gameAnsver = [numberQuestion, trueAnsver];
  return gameAnsver;
}
