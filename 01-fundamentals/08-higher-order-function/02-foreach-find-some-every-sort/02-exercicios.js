const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1892,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1822 ,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1948,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = books.find(element => element.author.birthYear === 1947).author.name
console.log(authorBornIn1947)

// 2 - Retorne o nome do livro de menor nome.

const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach(element => {
    if (element.name < nameBook) {
      nameBook = element.name;
    }
  })
  return nameBook;
}
console.log(smallerName())

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = books.find(element => element.name.length === 26)
console.log(getNamedBook.name)

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => a.releaseYear - b.releaseYear)

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const everyoneWasBornOnSecXX = () => books.every(element => element.author.birthYear > 1900 && element.author.birthYear <= 2000)

console.log(everyoneWasBornOnSecXX())

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const someBookWasReleaseOnThe80s = () => books.some(element => element.releaseYear >= 1980 && element.releaseYear < 1990)

console.log(someBookWasReleaseOnThe80s())

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const authorUnique = () => {
  books.sort((a,b) => a.author.birthYear - b.author.birthYear);
  let age
  let egual = true
  books.forEach(element => {
    if (element.author.birthYear === age) {
      egual = false
    } else {
      age = element.author.birthYear
    }
  })
  return egual
}

console.log(authorUnique())

// gabarito 
const authorUnique2 = () => 
  books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));

console.log(authorUnique2())
