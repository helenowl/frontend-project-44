import { calculateRandomInt, calculateRandomChar } from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;

const calculateTrueAnswer = (num1, num2, char) => {
  switch (char) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error(`Sorry! This operation - ${char} is not available`);
  }
};

const gameRule = 'What is the result of the expression?';

const getGameValues = () => {
  const randomInt1 = calculateRandomInt(maxInt);
  const randomInt2 = calculateRandomInt(maxInt);
  const randomChar = calculateRandomChar();
  const question = `${randomInt1} ${randomChar} ${randomInt2}`;
  const trueAnswer = calculateTrueAnswer(randomInt1, randomInt2, randomChar);
  return [question, String(trueAnswer)];
};

export default () => {
  runIndex(gameRule, getGameValues);
};
