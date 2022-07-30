const fs = require('fs/promises');
const express = require('express');

const app = express();
app.use(express.json());

async function getSimpsons() {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  return JSON.parse(data);
}

app.get('/simpsons', async (req, res) => {
  const data = await getSimpsons();
  res.status(200).json(data);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getSimpsons();
  const char = data.find((char) => char.id === id);
  if (!char)
    return res.status(400).json({ message: 'Personagem não encontrado' });
  res.status(200).json(char);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const data = await getSimpsons();
  const char = data.find((char) => char.id === id);
  if (char)
    return res
      .status(409)
      .json({ message: 'Conflito, personagem já cadastrado' });
  res.status(204).end();
  data.push({ id, name });
  fs.writeFile('./simpsons.json', JSON.stringify(data, null, 2));
});

app.listen(3001);
