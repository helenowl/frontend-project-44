#!/usr/bin/env node
import * as even from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = even.getAnsver('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let j = 0;
for (let i = 0; i < 3; i += 1) {
  const randomInt = even.getRandomInt(100);
  console.log(`Question: ${randomInt}`);
  const numberQuestion = even.getAnsver('Your answer: ');
  if (numberQuestion === even.getTrueAnsver(randomInt)) {
    j += 1;
    console.log('Correct!');
  } else {
    console.log(`'${numberQuestion}' is wrong answer ;(. Correct answer was '${even.getTrueAnsver(randomInt)}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
if (j === 3) {
  console.log(`Congratulations, ${userName}!`);
}
