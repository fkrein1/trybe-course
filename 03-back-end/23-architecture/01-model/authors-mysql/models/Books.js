const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  };
};

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books',
  );
  return books.map(serialize);
};

const getByBookId = async (id) => {
  const [book] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?',
    [id],
  );
  if (book.length === 0) return null;
  return book.map(serialize)[0];
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'string') return false;

  return true;
};

const create = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId],
  );
};

module.exports = { getAll, getByBookId, create, isValid };
