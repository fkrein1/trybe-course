const express = require('express');
require('express-async-errors');
const tradeController = require('./controllers/transactions');

const app = express();

app.use(express.json());
app.post('/buy', tradeController.buyBTC);
app.post('/sell', tradeController.sellBTC);

app.use((err, req, res, next) => {
  console.log(err);

  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  res.status(500).json({ message: 'Erro no Servidor!' });
});

app.listen(3001, () => console.log(`Running on port ${3001}`));
