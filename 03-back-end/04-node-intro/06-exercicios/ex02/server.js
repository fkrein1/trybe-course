const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

function validateToken(req, res, next) {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (!/^[a-z0-9]+$/i.test(authorization)) {
    return res
      .status(401)
      .json({ message: 'invalid token, only number and letters' });
  }
  if (!authorization || authorization.length !== 12) {
    return res.status(401).json({ message: 'invalid token' });
  }
  next();
}
app.get('/btc/price', validateToken, async (req, res) => {
  const data = await fetch(
    'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
  );
  const btc = await data.json();
  res.status(200).json(btc);
});

app.listen(3002, () => console.log('Port 3002'));
