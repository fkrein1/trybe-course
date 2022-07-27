const readline = require('readline-sync');

const number = readline.questionInt('Qual número fatorial?: ');

function fatorial(number) {
  let fatorial = 1;
  for (let index = number; index > 1; index -= 1) {
    fatorial = index * fatorial;
  }
  console.log(fatorial);
}

module.exports = fatorial(number);
