import readlineSync from 'readline-sync';

export function getAnsver(question) {
  const ansver = readlineSync.question(question);
  return ansver;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomChar() {
  const items = ['+', '-', '*'];
  return items[Math.floor((Math.random() * items.length))];
}
