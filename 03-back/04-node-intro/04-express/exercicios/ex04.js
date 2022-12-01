const express = require('express');

const app = express();
app.use(express.json());

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001);
