import * as brain from '../brain.js';
import app from '../index.js';

const calculateTrueAnsver = (num1, num2) => {
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
  return String(result);
};

const getGameRules = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  return gameRules;
};

const getGameValues = () => {
  const randomInt1 = brain.calculateRandomInt(100);
  const randomInt2 = brain.calculateRandomInt(100);
  const question = `${randomInt1} ${randomInt2}`;
  const trueAnsver = calculateTrueAnsver(randomInt1, randomInt2);
  const gameAnsver = [question, trueAnsver];
  return gameAnsver;
};

export default () => {
  app(getGameRules(), getGameValues);
};
