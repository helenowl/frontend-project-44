import * as utils from '../utils.js';
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

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameValues = () => {
  const randomInt = utils.calculateRandomInt(maxInt);
  const trueAnswer = calculateTrueAnswer(randomInt) ? 'yes' : 'no';
  return [randomInt, trueAnswer];
};

export default () => {
  runIndex(gameRules, getGameValues);
};
