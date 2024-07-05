import * as utils from './utils.js';

export default (gameRules, getGameValues) => {
  console.log('Welcome to the Brain Games!');
  const userName = utils.getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameRules}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameValues();
    console.log(`Question: ${question}`);
    const yourAnswer = utils.getAnswer('Your answer: ');

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
