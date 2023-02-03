const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeShift = (object, chave, value) => object[chave] = value
const listKeys = objetct => Object.keys(objetct)
const objectSize = object => Object.keys(object).length
const listValues = objetct => Object.values(objetct)


const allLessons = Object.assign({lesson1:lesson1}, {lesson2:lesson2}, {lesson3:lesson3})

const studentsTotal = object => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes

const getValueByNumber = (object, position) => Object.values(object)[position]

const verifyPair = (object, key, value) => {
  let objectArray = Object.entries(object);
  for (let pair of objectArray) {
    if (pair[0] === key && pair[1] === value) {
      return true
    }
  }
  return false
}

// bonus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const totalAlunos = (object, materia) => {
  let alunos = 0;
  let entries = Object.entries(object);
  for (let entry of entries) {
    if (entry[1].materia === materia) {
      alunos += entry[1].numeroEstudantes
    }
  }
  return alunos
}

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


const createReport = (object, professor) => {
  let entries = Object.entries(object);
  let allAulas = []
  let allEstudantes = 0
  for (let entry of entries) {
    if (entry[1].professor === professor) {
      allAulas.push(entry[1].materia)
      allEstudantes += entry[1].numeroEstudantes
    }
  }
  return {
    professor: professor,
    aulas: allAulas,
    estudantes: allEstudantes,
  }
}

console.log(createReport(allLessons, 'Carlos'))
