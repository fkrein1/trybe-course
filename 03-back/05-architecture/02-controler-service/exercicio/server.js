const express = require('express');
require('express-async-errors');
const Controllers = require('./controllers');

const app = express();
app.use(express.json());

app.get('/ping', Controllers.pong);
app.get('/cep/:cep', Controllers.getZip);
app.post('/cep/', Controllers.addZip);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log('running 3000'));
