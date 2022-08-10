const movieModel = require('../models/movieModel');

function isValid(title, directedBy, releaseYear) {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
}

async function getAll() {
  const movies = await movieModel.getAll();
  return movies;
}

async function create({ title, directedBy, releaseYear }) {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await movieModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
}

module.exports = { getAll, create };
