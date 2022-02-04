// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(n) {
  let multi = 1
  for (let index = 1; index <= n; index+=1) {
    multi *= index
  }
  console.log(multi)
}

fatorial(10)

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

function invert(word) {
  let invertedWord = ""
  for (let index = 0; index < word.length; index+=1) {
    invertedWord += word[word.length - index - 1]
  }
  console.log(invertedWord)
}

invert("sacramentolindo")

// 3- Considere o array de strings abaixo, escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

function biggestWord(listOfWords){
  let bigWord = listOfWords[0]
  for (let words of listOfWords){
    if (bigWord.length <= words.length){
      bigWord = words
    }
  }
  console.log(bigWord)
  }

  biggestWord(array)

  function smallestWord(listOfWords){
    let smallWord = listOfWords[0]
    for (let index = 0; index < listOfWords.length; index+=1) {
      if (smallWord.length >= listOfWords[index].length){
        smallWord = listOfWords[index]
      }
    }
  console.log(smallWord)
  }

  smallestWord(array)

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

function isPrimeNumber(number){
  let divisions = 0
  for (let index = 0; index < number; index += 1) {
    if (number % (number - index) === 0)
    divisions += 1
  }
  if (divisions === 2){
    return true
  } else {
    return false
  }
}

function biggestPrime(topNumber){
  let prime = 2 
  for (let index = 2; index <= topNumber; index+=1) {
    if(isPrimeNumber(index)){
      prime = index
    }
  }
  console.log(prime)
}

biggestPrime(210)

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

function square(n){
  for (let index = 0; index < n ; index +=1){
    console.log("*".repeat(n))
  }
}

square(3)

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function triangle(n){
  for (let index = 1; index <= n; index += 1) {
  console.log("*".repeat(index))    
  }
}

triangle(4)

// 3- Agora inverta o lado do triângulo. Por exemplo:

function invertedTriangle(n){
  for (let index = 1; index <= n; index += 1) {
  console.log(" ".repeat(n-index) + "*".repeat(index))    
  }
}

invertedTriangle(5)

// 4- Depois, faça uma pirâmide com n asteriscos de base:

function perfectTriangle(n){
  let left = 0
  let middle = 0
  let right = 0
  for(let index = 0; index < n; index += 2){
    if(n % 2 != 0){
      right = (n - 1 - index)/2
      left = (n - 1 - index)/2
      middle = index + 1
      console.log(" ".repeat(left) + "*".repeat(middle) + " ".repeat(right))
    } 
    if(n % 2 === 0){
      right = (n - 1 - index)/2
      left = (n - 1 - index)/2
      middle = index + 2
      console.log(" ".repeat(left) + 
                  "*".repeat(middle) + 
                  " ".repeat(right))
    } 
  }
}

perfectTriangle(9)

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

function emptyTriangle(n){
  console.log(" ".repeat((n-1)/2) + "*".repeat(1) + " ".repeat((n-1)/2))
  
  let left = 0
  let middle = 0
  let right = 0
  for(let index = 0; index < n-3; index += 2){
    left = (n - 2 - index)/2
    middle = index + 1
    right = (n - 2 - index)/2
    console.log(" ".repeat(left) +
                "*".repeat(1) + 
                " ".repeat(middle) +
                "*".repeat(1) +
                " ".repeat(right))
  }
  console.log("*".repeat(n))
}

emptyTriangle(39)

/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

function isPrimeNumber(number){
  let divisions = 0
  for (let index = 0; index < number; index += 1) {
    if (number % (number - index) === 0)
    divisions += 1
  }
  if (divisions === 2){
    return true
  } else {
    return false
  }
}

console.log(isPrimeNumber(12))