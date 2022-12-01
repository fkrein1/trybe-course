const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getByAuthorId(id);
  if (!author) return res.status(400).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }
  await Author.create(firstName, middleName, lastName);
  res.status(200).json({ message: 'Author created' });
});

app.put('/authors/:id', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  const { id } = req.params;
  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }
  await Author.update(id, firstName, middleName, lastName);
  res
    .status(200)
    .json({ message: 'Author updated', firstName, middleName, lastName });
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByBookId(id);
  console.log(book);
  if (!book) return res.status(400).json({ message: 'Not found' });
  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  if (!Books.isValid(title, authorId)) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }
  const authors = await Author.getAll();
  if (!authors.find((author) => author.id === Number(authorId))) {
    return res.status(400).json({ message: 'Invalid author ID' });
  }
  await Books.create(title, authorId);
  res.status(200).json({ message: 'Book created' });
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
