import * as brain from '../brain.js';
import app from '../index.js';

const calculateTrueAnsver = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
      // break;
    }
  }
  return 'yes';
};

const getGameRules = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameRules;
};

const getGameValues = () => {
  const randomInt = brain.calculateRandomInt(100);
  const trueAnsver = calculateTrueAnsver(randomInt);
  const gameAnsver = [randomInt, trueAnsver];
  return gameAnsver;
};

export default () => {
  app(getGameRules(), getGameValues);
};
