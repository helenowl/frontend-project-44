import * as brain from '../brain.js';

export function getTrueAnsver(num1, num2, char) {
  let result = 0;
  if (char === '+') {
    result = num1 + num2;
  } else if (char === '-') {
    result = num1 - num2;
  } else if (char === '*') {
    result = num1 * num2;
  }

  return `${result}`;
}

export function getGameRules() {
  console.log('What is the result of the expression?');
}

export function getGameAnsver() {
  const randomInt1 = brain.getRandomInt(100);
  const randomInt2 = brain.getRandomInt(100);
  const randomChar = brain.getRandomChar();
  const question = `${randomInt1}${randomChar}${randomInt2}`;
  console.log(`Question: ${question}`);
  const numberQuestion = brain.getAnsver('Your answer: ');
  const trueAnsver = getTrueAnsver(randomInt1, randomInt2, randomChar);
  const gameAnsver = [numberQuestion, trueAnsver];
  return gameAnsver;
}
