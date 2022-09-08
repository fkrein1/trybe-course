const fs = require('fs').promises;
const simpsons = require('./simpsons.json');

async function printSimpson() {
  const simpsonsData = await fs.readFile('./simpsons.json', 'utf-8')
  JSON.parse(simpsonsData).forEach((char) => {
    console.log(`${char.id} - ${char.name}`);
  });
}

function getSimpson(id) {
  return new Promise((resolve, reject) => {
    const char = simpsons.filter((char) => parseInt(char.id, 10) === id);
    if (char.length === 0) return reject('id não encontrado');
    return resolve(char[0].name);
  });
}

async function simpsonFilter() {
  const filteredChar = simpsons.filter(
    (char) => char.id !== '10' && char.id !== '6',
  );
  try {
    await fs.writeFile(
      './simpsonsFilter.json',
      JSON.stringify(filteredChar, null, 2),
    );
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

async function simpsonFamilyCreate() {
  const filteredChar = simpsons.filter(
    (char) => char.id === '1' || char.id === '4',
  );
  try {
    await fs.writeFile(
      './simpsonFamily.json',
      JSON.stringify(filteredChar, null, 2),
    );
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

printSimpson();
getSimpson(3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

simpsonFilter();
simpsonFamilyCreate();
