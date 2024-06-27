import * as brain from '../brain.js';

export function getTrueAnsver(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export function getGameRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
}

export function getGameAnsver() {
  const randomInt = brain.getRandomInt(100);
  console.log(`Question: ${randomInt}`);
  const numberQuestion = brain.getAnsver('Your answer: ');
  const trueAnsver = getTrueAnsver(randomInt);
  const gameAnsver = [numberQuestion, trueAnsver];
  return gameAnsver;
}
