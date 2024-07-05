import * as utils from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;
const maxStep = 10;
const minLength = 5;
const maxLength = 11;

const calculateQuestion = (num1, step, lineLength) => {
  const result = [num1];

  for (let i = 1; result.length <= lineLength; i += 1) {
    const item = result[i];
    result[i] = result[i - 1] + step;
    result.push(item);
  }
  return result;
};

const gameRules = 'What number is missing in the progression?';

const getGameAnswer = () => {
  const randomInt1 = utils.calculateRandomInt(maxInt);
  const randomStep = utils.calculateRandomInt(maxStep);
  const randomLength = utils.calculateRandomInt2(minLength, maxLength);
  const randomPoint = utils.calculateRandomInt(randomLength - 1);
  const point = '..';

  const question = calculateQuestion(randomInt1, randomStep, randomLength);
  const trueAnswer = String(question[randomPoint]);
  question[randomPoint] = point;
  const phraseQuestion = question.join(' ');
  return [phraseQuestion, trueAnswer];
};

export default () => {
  runIndex(gameRules, getGameAnswer);
};
