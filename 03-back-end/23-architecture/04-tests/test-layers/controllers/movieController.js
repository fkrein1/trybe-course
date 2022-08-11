const movieService = require('../services/movieService');

async function getAll(req, res) {
  const movies = await movieService.getAll();
  res.status(200).json(movies);
}

async function create(req, res) {
  const { title, directedBy, releaseYear } = req.body;
  const movie = await movieService.create({ title, directedBy, releaseYear });
  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }
  res.status(201).send('Filme criado com sucesso!');
}

async function getById(req, res) {
  const { id } = req.params;
  const movie = await movieService.getById(id);
  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }
  res.status(200).json(movie);
}

module.exports = { getAll, create, getById };
