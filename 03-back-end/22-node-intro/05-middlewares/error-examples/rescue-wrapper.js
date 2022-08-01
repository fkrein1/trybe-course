const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

function rescue(action) {
  return async function (req, res, next) {
    try {
      await action(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

app.get(
  '/erro',
  rescue(async (req, res, next) => {
    throw 'O usuário andre da senha batman123 não autenticado';
  }),
);

app.get('/', (request, response) => {
  return response.status(200).send('<h1>Olá, mundo!</h1>');
});

app.use((err, req, res, next) => {
  const message = `[${req.method}] ${req.path} - error: ${err}\n`;
  fs.appendFile('errors.txt', message);

  res.status(500).json({ message: 'Erro no servidor!' });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
