const express = require('express');
const { Book } = require('./models');
const { Op } = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

app.get('/books', async (req, res) => {
  const { aut } = req.query;
  if (aut) {
    const books = await Book.findAll({
      where: {
        author: {
          [Op.like]: `%${aut}%`,
        },
        order: [['author', 'ASC']],
      },
    });
    return res.status(200).json(books);
  }
  const books = await Book.findAll({ order: [['author', 'ASC']] });
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  if (!title || !author || !pageQuantity) {
    return res.status(401).json({ message: 'missing value' });
  }
  const books = await Book.create({ title, author, pageQuantity });
  res.status(201).json(books);
});

app.put('/books/:id', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  if (!title || !author || !pageQuantity) {
    return res.status(401).json({ message: 'missing value' });
  }
  const [book] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
  if (!book) return res.status(400).json({ message: 'book not found' });
  res.status(201).json({ message: 'Livro atualizado com sucesso!' });
});

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.destroy({ where: { id } });
  console.log(book);
  if (!book) return res.status(400).json({ message: 'book not found' });
  res.status(201).json({ message: 'Livro excluido com sucesso!' });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
