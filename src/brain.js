import readlineSync from 'readline-sync';

export function getAnsver(question) {
  const ansver = readlineSync.question(question);
  return ansver;
}

export function calculateRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function calculateRandomInt2(min, max) {
  return Math.random() * (max - min) + min;
}

export function calculateRandomChar() {
  const items = ['+', '-', '*'];
  return items[Math.floor((Math.random() * items.length))];
}
