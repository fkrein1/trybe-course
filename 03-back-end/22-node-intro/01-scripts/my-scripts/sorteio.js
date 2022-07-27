const readline = require('readline-sync');

const numberGuess = readline.questionInt('Escolha um número entre 0 e 10: ');

const prizeDraw = (number) => {
  const draw = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  if (draw === number) return console.log('Parabéns, número correto!');
  return console.log(`Opa, não foi dessa vez. O número era ${draw}`);
};

module.exports = prizeDraw(numberGuess);
