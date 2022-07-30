const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

app.listen(3001);

