const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function errorMiddleware(req, res, next) {
  const { username, email, password } = req.body;
  if (!username || username.length < 3) {
    return res.status(400).json({ message: 'invalid data, username' });
  }
  if (!email || !ValidateEmail(email)) {
    return res.status(400).json({ message: 'invalid data, email' });
  }
  if (
    !password ||
    password.length < 4 ||
    password.length > 8 ||
    typeof Number(password) !== 'number'
  ) {
    return res.status(400).json({ message: 'invalid data, password' });
  }
  next();
}

app.post('/user/register', errorMiddleware, (req, res) => {
  res.status(201).json({ message: 'user created' });
});

function errorMiddlewareLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !ValidateEmail(email)) {
    return res.status(400).json({ message: 'invalid data, email' });
  }
  if (
    !password ||
    password.length < 4 ||
    password.length > 8 ||
    typeof Number(password) !== 'number'
  ) {
    return res.status(400).json({ message: 'invalid data, password' });
  }
  next();
}

app.post('/user/login', errorMiddlewareLogin, (req, res) => {
  const tokenId = crypto.randomBytes(6).toString('hex');
  res.status(200).json({ token: tokenId });
});

app.listen(3001, () => console.log('Port 3001'));
