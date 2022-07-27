const readline = require('readline-sync');

const sequence = readline.questionInt('Quantos elementos da fibonaci?: ');

function fibonacci(sequence) {
  const fibonacciSequence = [1, 1];
  for (let index = 2; index < sequence; index++) {
    fibonacciSequence.push(fibonacciSequence[index - 1] + fibonacciSequence[index - 2]);
  }
  console.log(fibonacciSequence)
}

module.exports = fibonacci(sequence);
