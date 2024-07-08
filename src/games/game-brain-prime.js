import { calculateRandomInt } from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;

const calculateTrueAnswer = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameValues = () => {
  const randomInt = calculateRandomInt(maxInt);
  const trueAnswer = calculateTrueAnswer(randomInt) ? 'yes' : 'no';
  return [randomInt, trueAnswer];
};

export default () => {
  runIndex(gameRule, getGameValues);
};
