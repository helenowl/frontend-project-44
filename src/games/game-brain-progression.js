import { calculateRandomInt, calculateRandomInt2 } from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;
const maxStep = 10;
const minLength = 5;
const maxLength = 11;

const calculateQuestion = (num1, step, lineLength) => {
  const result = [num1];

  for (let i = 1; result.length <= lineLength; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const gameRule = 'What number is missing in the progression?';

const getGameAnswer = () => {
  const randomInt1 = calculateRandomInt(maxInt);
  const randomStep = calculateRandomInt(maxStep);
  const randomLength = calculateRandomInt2(minLength, maxLength);
  const randomPoint = calculateRandomInt(randomLength - 1);
  const point = '..';

  const question = calculateQuestion(randomInt1, randomStep, randomLength);
  const trueAnswer = String(question[randomPoint]);
  question[randomPoint] = point;
  const phraseQuestion = question.join(' ');
  return [phraseQuestion, trueAnswer];
};

export default () => {
  runIndex(gameRule, getGameAnswer);
};
