import * as brain from './brain.js';

export default (gameRules, getGameValues) => {
  console.log('Welcome to the Brain Games!');
  const userName = brain.getAnsver('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameRules}`);
  let j = 0;
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameValues();
    console.log(`Question: ${question}`);
    const yourAnswer = brain.getAnsver('Your answer: ');

    if (yourAnswer === correctAnswer) {
      j += 1;
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (j === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
