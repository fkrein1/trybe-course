// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(word){
  let count = 0
  for (let index = 0; index < word.length; index +=1){
    if(word[index] === word[word.length - index - 1]){
    count += 1
    }
  }
  if(count === word.length){
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("ara"))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function bigIndex(array){
  let bigIndex = 0
  for (let key in array){
    if(array[key] >= array[bigIndex]){
      bigIndex = key

    }
  }
  return bigIndex
}

console.log(bigIndex([2, 3, 6, 7, 10, 1, 4]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallIndex(array){
  let small = array[0]
  let index = 0
  for (let key in array){
    if(array[key] <= small){
      small = array[key]
      index = key
    }
  }
  return index
}

console.log(smallIndex([2, 4, -6, 7, 10, 0, -3]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function bigString(array){
  let big = array[0]
  for (let word of array){
    if (word.length >= big.length){
      big = word
    }
  }
  return big
}

console.log(bigString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function repeatArray(array){
  let countOne = 0
  let countTwo = 0
  let big = array[0]
  for (let index = 0; index < array.length; index +=1){    
      if(countTwo > countOne){
        countOne = countTwo
        big = array[index - 1]
      }        
    for (let index2 = 0; index2 < array.length; index2 +=1){
      if (array[index] === array[index2]){
        countTwo +=1
      }
    }
  }
    return big
}


console.log(repeatArray([2, 3, 2, 5, 3, 2, 3, 5, 5, 5, 5, 5]))

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function soma(n){
  let total = 0
  for (let index = n ; index > 0; index -= 1 ){
    total += index
  }
  return total
}
console.log(soma(6))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending){
  let final = word.substr(word.length - ending.length, ending.length)
  if(final === ending){
    return true
  } else {
    return false
  }
}

console.log(verificaFimPalavra("fabricio", "icio"))