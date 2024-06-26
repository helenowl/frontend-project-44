import readlineSync from 'readline-sync';

export function getAnsver(question) {
  const ansver = readlineSync.question(question);
  return ansver;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getTrueAnsver(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
