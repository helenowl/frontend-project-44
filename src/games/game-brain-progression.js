import * as brain from '../brain.js';

export function getQuestion(num1, step, lineLength) {
  const result = [num1];

  for (let i = 1; result.length <= lineLength; i += 1) {
    const item = result[i];
    result[i] = result[i - 1] + step;
    result.push(item);
  }
  return result;
}

export function getGameRules() {
  console.log('What number is missing in the progression?');
}

export function getGameAnsver() {
  const randomInt1 = brain.getRandomInt(100);
  const randomStep = brain.getRandomInt(10);
  const randomLength = brain.getRandomInt2(5, 11);
  const randomPoint = brain.getRandomInt(randomLength - 1);
  const point = '..';

  const question = getQuestion(randomInt1, randomStep, randomLength);
  const trueAnsver = `${question[randomPoint]}`;
  question[randomPoint] = point;
  const phraseQuestion = question.join(' ');
  console.log(`Question: ${phraseQuestion}`);
  const numberQuestion = brain.getAnsver('Your answer: ');
  const gameAnsver = [numberQuestion, trueAnsver];
  return gameAnsver;
}
