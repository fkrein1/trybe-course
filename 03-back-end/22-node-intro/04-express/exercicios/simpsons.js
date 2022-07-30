const fs = require('fs/promises');
const express = require('express');

const app = express();
app.use(express.json());

async function getSimpsons() {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  return JSON.parse(data);
}


app.listen(3001);
