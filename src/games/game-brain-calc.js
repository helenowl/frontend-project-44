import * as utils from '../utils.js';
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
    default: return console.log(`Sorry! This operation - ${char} is not available`);
  }
};

const gameRules = 'What is the result of the expression?';

const getGameValues = () => {
  const randomInt1 = utils.calculateRandomInt(maxInt);
  const randomInt2 = utils.calculateRandomInt(maxInt);
  const randomChar = utils.calculateRandomChar();
  const question = `${randomInt1} ${randomChar} ${randomInt2}`;
  const trueAnswer = calculateTrueAnswer(randomInt1, randomInt2, randomChar);
  return [question, String(trueAnswer)];
};

export default () => {
  runIndex(gameRules, getGameValues);
};
