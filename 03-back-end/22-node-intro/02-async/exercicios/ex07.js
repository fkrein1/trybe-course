const readline = require('readline-sync');
const fs = require('fs').promises;

const file = readline.question('Qual arquivo você gostaria de ler: ');
const palavraRemover = readline.question('Qual palavra você quer substituir: ');
const novaPalavra = readline.question('Por qual palavra: ');
const aquivoDestino = readline.question('Qual arquivo de destino: ');

async function readFile() {
  try {
    const readFile = await fs.readFile(file, 'utf-8');
    const newText = readFile.replace(new RegExp(palavraRemover, 'g'), novaPalavra);
    console.log(newText);
    await fs.writeFile(aquivoDestino, newText)

  } catch (err) {
    console.log(`Arquivo não existe`);
  }
}

readFile()