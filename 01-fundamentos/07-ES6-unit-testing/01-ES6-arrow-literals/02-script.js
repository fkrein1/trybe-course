// 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => {
  let result = 1
  for (let i = 1; i <= number; i +=1) {
    result *= i
  }
  return result
}

console.log(fatorial(5))

const fatorial2 = number => number > 1 ? number * fatorial2(number -1) : 1;

console.log(fatorial2(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
  let array = phrase.split(' ') 
  let bigWord = array[0]
  for (let word of array) {
    if (bigWord.length < word.length) {
      bigWord = word
    }
  }
  return bigWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))


