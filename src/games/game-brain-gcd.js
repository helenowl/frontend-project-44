import * as brain from '../brain.js';

export function getTrueAnsver(num1, num2) {
  let result = 0;
  let n1 = num1;
  let n2 = num2;

  if (n1 < n2) {
    result = n1;
    n1 = n2;
    n2 = result;
  }

  while (n2 !== 0) {
    result = n2;
    n2 = n1 % n2;
    n1 = result;
  }

  return `${result}`;
}

export function getGameRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

export function getGameAnsver() {
  const randomInt1 = brain.getRandomInt(100);
  const randomInt2 = brain.getRandomInt(100);
  const question = `${randomInt1} ${randomInt2}`;
  console.log(`Question: ${question}`);
  const numberQuestion = brain.getAnsver('Your answer: ');
  const trueAnsver = getTrueAnsver(randomInt1, randomInt2);
  const gameAnsver = [numberQuestion, trueAnsver];
  return gameAnsver;
}
