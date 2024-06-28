import readlineSync from 'readline-sync';

export function getAnsver(question) {
  const ansver = readlineSync.question(question);
  return ansver;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function getRandomInt2(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomChar() {
  const items = ['+', '-', '*'];
  return items[Math.floor((Math.random() * items.length))];
}
