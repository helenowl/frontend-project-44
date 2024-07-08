import { calculateRandomInt } from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;

const calculateTrueAnswer = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameValues = () => {
  const randomInt = calculateRandomInt(maxInt);
  const trueAnswer = calculateTrueAnswer(randomInt) ? 'yes' : 'no';
  return [randomInt, trueAnswer];
};

export default () => {
  runIndex(gameRule, getGameValues);
};
