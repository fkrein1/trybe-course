/* errorHandlerExample.js */
const express = require('express');
require('express-async-errors');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002, () => console.log('Porta 3002'));
