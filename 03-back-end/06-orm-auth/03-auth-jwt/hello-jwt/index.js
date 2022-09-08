const express = require('express');
const { userSchema } = require('./schemas');
var jwt = require('jsonwebtoken');

const app = express();
const secret = 'meusegredopreciosodegondor';
const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

app.use(express.json());

app.post('/login', (req, res) => {
  const validate = userSchema.validate(req.body);
  if (validate.error) {
    return res.status(401).json(validate.error.details[0].message);
  }
  const { username } = req.body;
  const token = jwt.sign({ username, admin: false }, secret, jwtConfig);
  res.status(200).json({ token });
});

app.get('/user', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    res.status(200).json({ user: decoded.username, admin: decoded.admin});
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.listen(3002, () => console.log('Port 3002'));
