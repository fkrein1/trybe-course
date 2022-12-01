const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3004;
const TRYBE = process.env.TRYBE || 'Sou Trybe';

app.get('/', (req, res) => {
  res.status(200).json({ messagem: TRYBE });
});

app.listen(PORT, () => console.log(`active on ${PORT}`));
