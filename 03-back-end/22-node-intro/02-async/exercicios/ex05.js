const fs = require('fs').promises;

const files = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles() {
  const createFiles = files.map((text, index) =>
    fs.writeFile(`file${index + 1}.txt`, text),
  );

  await Promise.all(createFiles);
}

async function readFiles() {
  const readFiles = files.map((text, index) =>
    fs.readFile(`file${index + 1}.txt`, 'utf8'),
  );

  const filesText = await Promise.all(readFiles);

  const writeFile = filesText.map((text) =>
    fs.appendFile('fileAll.txt', `${text}\n`),
  );

  await Promise.all(writeFile);
}

createFiles();
readFiles();
