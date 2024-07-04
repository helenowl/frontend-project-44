import * as brain from '../brain.js';
import app from '../index.js';

const calculateTrueAnsver = (num1, num2, char) => {
  let result = 0;
  if (char === '+') {
    result = num1 + num2;
  } else if (char === '-') {
    result = num1 - num2;
  } else if (char === '*') {
    result = num1 * num2;
  }
  return String(result);
};

const getGameRules = () => {
  const gameRules = 'What is the result of the expression?';
  return gameRules;
};

const getGameValues = () => {
  const randomInt1 = brain.calculateRandomInt(100);
  const randomInt2 = brain.calculateRandomInt(100);
  const randomChar = brain.calculateRandomChar();
  const question = `${randomInt1}${randomChar}${randomInt2}`;
  const trueAnsver = calculateTrueAnsver(randomInt1, randomInt2, randomChar);
  const gameAnsver = [question, trueAnsver];
  return gameAnsver;
};

export default () => {
  app(getGameRules(), getGameValues);
};
