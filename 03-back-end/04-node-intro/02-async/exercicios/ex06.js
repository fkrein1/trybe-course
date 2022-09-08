const readline = require('readline-sync');
const fs = require('fs').promises;

const file = readline.question('Qual arquivo você gostaria de ler: ');

async function readFile() {
  try {
    const readFile = await fs.readFile(file, 'utf-8');
    console.log(readFile);
  } catch (err) {
    console.log(`Arquivo não existe`);
  }
}

readFile()