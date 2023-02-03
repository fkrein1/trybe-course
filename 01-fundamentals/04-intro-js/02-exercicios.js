// 1 - percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers) {
  console.log(number);
}

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0
for (let number of numbers){
  total = number + total
}
console.log(total)

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let total = 0
for (let number of numbers){
  total = number + total
}
let mediaAritmetica = total / numbers.length
console.log(mediaAritmetica)

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let total = 0

for (let number of numbers){
  total = number + total
}
let mediaAritmetica = total / numbers.length
if (mediaAritmetica > 20) {
  console.log("valor maior que 20")
} else if (mediaAritmetica <= 20) {
  console.log("valor menor ou igual a 20")
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let test = numbers[0]
for (let number of numbers){
  if (number >= test){
    test = number
  }
}
console.log(test)

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let test = 0
for (let number of numbers) {
  if (number % 2 != 0) {
    test += 1
  }
}
if (test > 0){
  console.log(test)
} else if (test == 0){
  console.log("nenhum valor ímpar encontrado")
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let test = numbers[0]
for (let number of numbers) {
  if (number <= test){
    test = number
  }
}
console.log(test)

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = []
for (let index = 0; index < 25; index += 1){
  numbers.push(index+1)
}
console.log(numbers)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = [
   1,  2,  3,  4,  5,  6,  7,  8,
   9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24,
  25
]
let numbersDividido = []
for (let number of numbers) {
  numbersDividido.push(number / 2)
}
console.log(numbersDividido)

// 10 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let size = numbers.length

for (let index = 0; index < size ; index += 1){
  for (let index2 = 0; index2 < size; index2 += 1){
    if(numbers[index] < numbers[index2]){
      let num = numbers[index]
      numbers[index] = numbers[index2]
      numbers[index2] = num
    }
  }
}

console.log(numbers);

// 11 - Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let size = numbers.length

for (let index = 0; index < size ; index += 1){
  for (let index2 = 0; index2 < size; index2 += 1){
    if(numbers[index] > numbers[index2]){
      let num = numbers[index]
      numbers[index] = numbers[index2]
      numbers[index2] = num
    }
  }
}

console.log(numbers);

// 12 Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []

for (let index = 0; index < numbers.length; index += 1){
  let multiplo = numbers[index] * numbers[index + 1]
  if (numbers[index + 1] == undefined){
    multiplo = numbers[index] * 2
  }
  newArray.push(multiplo)
}
console.log(newArray)