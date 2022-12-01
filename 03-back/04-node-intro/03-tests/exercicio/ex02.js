const fs = require('fs/promises');

function createFile(fileName, content) {
  fs.writeFile(fileName, content);
  return 'ok';
}

module.exports = createFile;
