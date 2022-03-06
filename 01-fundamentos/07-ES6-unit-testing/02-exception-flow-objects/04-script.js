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

