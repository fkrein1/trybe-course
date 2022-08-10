const connection = require('./connection');

function serialize({ id, title, directed_by, release_year }) {
  return {
    id,
    title,
    directedBy: directed_by,
    releaseYear: release_year,
  };
}

async function getAll() {
  const [movies] = await connection.execute(
    'SELECT id, title, directed_by, release_year FROM movies',
  );
  return movies.map(serialize);
}

async function create({ title, directedBy, releaseYear }) {
  const [result] = await connection.execute(
    'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear],
  );
  return { id: result.insertId };
}

async function getById(id) {
  const [result] = await connection.execute(
    'SELECT id, title, directed_by, release_year FROM movies WHERE id = ?',
    [id],
  );
  return result.map(serialize)[0];
}

getById(4).then(response => console.log(response))

module.exports = { getAll, create, getById };
