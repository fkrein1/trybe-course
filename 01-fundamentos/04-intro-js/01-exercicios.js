// 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 
const a = 8
const b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a = 8
const b = 30
if (a > b){
  console.log(a)
} else {
  console.log(b)
}

// 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 36
const b = 30
const c = 45
if (a > b && a >c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

// 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const a = 0
if (a > 0) {
  console.log("positive")
} else if (a < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const a = -10
const b = 90
const c = 80
if (a <= 0 || b <= 0 || c <= 0) {
  console.log("erro")
} else if ( (a + b + c) === 180) {
  console.log(true)
} else {
  console.log(false)
}

// 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = "rainah"
switch (pecaXadrez.toLowerCase()) {
  case "cavalo":
    console.log("éle")
    break
  case "rainha":
    console.log("diagonal, lado ou reto")
    break
  case "peao":
    console.log("uma frente")
    break  
  case "rei":
    console.log("uma reto ou lado")
    break  
  case "torre":
    console.log("reto ou lado")
    break  
  case "bispo":
    console.log("diagonal")
    break  
  default:
    console.log("peça inválida")    
  }

// 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let nota = -9
if (nota > 100 || nota <0){
  console.log("erro")
} else if (nota >= 90){
  console.log("A")
} else if (nota >=80){
  console.log("B")
} else if (nota >=70){
  console.log("C")
} else if (nota >=60){
  console.log("D")
} else if (nota >=50){
  console.log("E")
} else if (nota < 50){
  console.log("F")
}

// 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const a = 1
const b = 3
const c = 5
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
  console.log(true)
} else {
  console.log(false)
}

// 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const a = 2
const b = 4
const c = 6
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
  console.log(true)
} else {
  console.log(false)
}

// 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
let valorCusto = 200
let valorVenda = 400
let imposto = 0.2 * valorCusto

if (valorCusto <0 || valorVenda < 0){
  console.log("erro")
} else {
  let lucro = valorVenda - valorCusto - imposto
  console.log(lucro * 1000)
}

// 11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 1000
let inss = 0
let ir = 0

if (salario <= 1556.94) {
  inss = 0.08 * salario
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = 0.09 * salario
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = 0.11 * salario
} else {
  inss = 570.88
}

let salarioLiquido = salario - inss

if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
  ir = 0.075 * salarioLiquido - 142.80
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
  ir = 0.15 * salarioLiquido - 354.80
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
  ir = 0.225 * salarioLiquido - 636.13
} else if (salarioLiquido > 4664.68) {
  ir = 0.275 * salarioLiquido - 869.36
} 

console.log( salarioLiquido - ir)