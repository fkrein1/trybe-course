const express = require('express');
const { generateToken } = require('./generateToken');
const { auth } = require('./auth');
const {
  checkWarranty,
  checkSaleDate,
  checkInfosKeys,
  checkProducName,
} = require('./saleValidation');

const app = express();
app.use(express.json());

app.post(
  '/sales',
  auth,
  checkProducName,
  checkInfosKeys,
  checkSaleDate,
  checkWarranty,
  (req, res) => {
    res.status(200).json({ message: 'Venda cadastrada com sucesso' });
  },
);

app.post('/signup', async (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  res.status(200).json({ token: await generateToken() });
});

app.listen(3002, () => console.log('Port: 3001'));
