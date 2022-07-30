const express = require('express');

const app = express();
app.use(express.json());

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age >= 18) return res.status(200).json({ message: `Hello, ${name}` });
  if (age < 18) return res.status(401).json({ message: 'Unauthorized' });
});

app.listen(3001);
