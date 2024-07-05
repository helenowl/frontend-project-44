import * as utils from '../utils.js';
import runIndex from '../index.js';

const maxInt = 100;

const calculateTrueAnswer = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameValues = () => {
  const randomInt = utils.calculateRandomInt(maxInt);
  const trueAnswer = calculateTrueAnswer(randomInt) ? 'yes' : 'no';
  return [randomInt, trueAnswer];
};

export default () => {
  runIndex(gameRules, getGameValues);
};
