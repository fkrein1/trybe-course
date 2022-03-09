// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const createEmail = (nome) => { 
  const email = `${nome.toLowerCase().replace(' ', '_')}@trybe.com`;
  return {nomeCompleto : nome, email : email};
}

console.log(newEmployees(createEmail));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkPrize = (callback, ticket) => {
  if (callback() === ticket) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

const randomOneToFive = () => Math.floor(Math.random() * (6 - 1)) + 1;

console.log(checkPrize(randomOneToFive, 5));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'E'];

const finalGrade = (rightAnswer, studentAnswer, callback) => {
  return callback (rightAnswer, studentAnswer);
}

const checkGrade = (rightAnswer, studentAnswer) => {
  grade = 0;
  for (let index in rightAnswer) {
    if (studentAnswer[index] === 'N.A') {
      grade += 0;
    } else if (studentAnswer[index] === rightAnswer[index]) {
      grade += 1;
    } else {
      grade -= 0.5
    }
  }
  return grade
}

console.log(finalGrade(RIGHT_ANSWERS, STUDENT_ANSWERS,checkGrade))