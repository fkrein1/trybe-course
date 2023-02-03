///////////////
const newEmployees = () => {
  const employees = {
    id1: employeeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeEmail('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeEmail = (name) => `${name.replace(' ', '_').toLowerCase()}@trybe.com`
console.log(Object.values(newEmployees()))

///////////////

const checkPrize = (number) => {
  const result = numberBetweenFiveAndOne()
  return number === result ? 'Parabéns você ganhou' : 'Tente novamente'
}

const numberBetweenFiveAndOne = ()=> Math.floor(Math.random() * (5 - 1 + 1)) + 1;

console.log(checkPrize(1))

////////////////

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testScore = RIGHT_ANSWERS.map((element, index) => {
  if (element === STUDENT_ANSWERS[index]) {
    return 1
  } else if (STUDENT_ANSWERS[index] === 'N.A') {
    return 0
  } else {
    return -0.5
  }
})
.reduce((acc, grade) => acc + grade)

console.log(testScore)
