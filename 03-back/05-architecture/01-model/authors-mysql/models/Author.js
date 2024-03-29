const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const getByAuthorId = async (id) => {
  const [author] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
    [id],
  );
  if (author.length === 0) return null;
  return author.map(serialize).map(getNewAuthor)[0];
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName === undefined) return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
};

const update = async (id, firstName, middleName, lastName) => {
  connection.execute(
    'UPDATE model_example.authors SET first_name = ?, middle_name = ?, last_name =? WHERE id = ?',
    [firstName, middleName, lastName, id],
  );
};

module.exports = {
  getAll,
  getByAuthorId,
  create,
  isValid,
  update,
};
