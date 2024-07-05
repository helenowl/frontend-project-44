import * as utils from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;

const calculateTrueAnswer = (num1, num2) => {
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
  return result;
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameValues = () => {
  const randomInt1 = utils.calculateRandomInt(maxInt);
  const randomInt2 = utils.calculateRandomInt(maxInt);
  const question = `${randomInt1} ${randomInt2}`;
  const trueAnswer = calculateTrueAnswer(randomInt1, randomInt2);
  return [question, String(trueAnswer)];
};

export default () => {
  runIndex(gameRules, getGameValues);
};
