const express = require('express');

const app = express();
app.use(express.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` });
});

app.listen(3001);
