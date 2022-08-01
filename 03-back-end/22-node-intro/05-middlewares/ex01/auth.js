const fs = require('fs/promises');

async function auth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  const tokenFile = JSON.parse(await fs.readFile('./tokens.json', 'utf8'));
  if (!tokenFile.find((token) => token.token === authorization)) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  next();
}

module.exports = { auth };
