import * as brain from '../brain.js';
import app from '../index.js';

const calculateQuestion = (num1, step, lineLength) => {
  const result = [num1];

  for (let i = 1; result.length <= lineLength; i += 1) {
    const item = result[i];
    result[i] = result[i - 1] + step;
    result.push(item);
  }
  return result;
};

const getGameRules = () => {
  const gameRules = 'What number is missing in the progression?';
  return gameRules;
};

const getGameAnsver = () => {
  const randomInt1 = brain.calculateRandomInt(100);
  const randomStep = brain.calculateRandomInt(10);
  const randomLength = brain.calculateRandomInt2(5, 11);
  const randomPoint = brain.calculateRandomInt(randomLength - 1);
  const point = '..';

  const question = calculateQuestion(randomInt1, randomStep, randomLength);
  const trueAnsver = String(question[randomPoint]);
  question[randomPoint] = point;
  const phraseQuestion = question.join(' ');
  const gameAnsver = [phraseQuestion, trueAnsver];
  return gameAnsver;
};

export default () => {
  app(getGameRules(), getGameAnsver);
};
