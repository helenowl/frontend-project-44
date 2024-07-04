import * as brain from '../brain.js';
import app from '../index.js';

const calculateTrueAnsver = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getGameRules = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
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
