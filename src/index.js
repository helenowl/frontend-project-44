import { getAnswer } from './utils.js';

export default (gameRule, getGameValues) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameRule}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameValues();
    console.log(`Question: ${question}`);
    const yourAnswer = getAnswer('Your answer: ');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
