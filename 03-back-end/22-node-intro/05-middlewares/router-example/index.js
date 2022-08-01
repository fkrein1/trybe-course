/* index.js */
const express = require('express');

const app = express();
app.use(express.json());

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);


app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });