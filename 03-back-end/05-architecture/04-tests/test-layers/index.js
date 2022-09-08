const express = require('express');
require('express-async-errors');
const movieController = require('./controllers/movieController');

const app = express();
app.use(express.json());

app.get('/movies', movieController.getAll);
app.get('/movies/:id', movieController.getById);

app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
});
app.listen(3002, () => console.log('port 3002'));
