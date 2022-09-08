const readline = require('readline-sync');
const { sub, sum, div, mul } = require('./operations');

const firstNumber = readline.questionInt('Digite primeiro número: ');
const operation = readline.question('Digite operação (+, -, /, *): ');
const secondNubmer = readline.questionInt('Digite segundo número: ');

switch (operation) {
  case '+':
    sum(firstNumber, secondNubmer);
    break;
  case '-':
    sub(firstNumber, secondNubmer);
    break;
  case '*':
    mul(firstNumber, secondNubmer);
    break;
  case '/':
    div(firstNumber, secondNubmer);
    break;
  default:
    console.log('Operação inválida');
}
