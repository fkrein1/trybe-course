// Objetos em Javascript
let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey


// Para fixar
let player = { 
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade")
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes")
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata")

// for in 

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// for in 2 
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

// for of

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

// Fixar 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log("Olá " + names[index])
}

//Fixar 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car){s
  console.log(index, car[index])
}