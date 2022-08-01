const crypto = require('crypto');
const fs = require('fs/promises');

async function generateToken() {
  const tokenId = crypto.randomBytes(8).toString('hex');
  const tokenFile = JSON.parse(await fs.readFile('./tokens.json', 'utf8'));
  tokenFile.push({ token: tokenId });
  fs.writeFile('./tokens.json', JSON.stringify(tokenFile, null, 2))
  return tokenId;
}

module.exports = { generateToken };
