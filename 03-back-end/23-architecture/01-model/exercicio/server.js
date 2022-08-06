const express = require('express');
const User = require('./models/User');

const PORT = 3000;
const app = express();
app.use(express.json());

const rescue = (action) => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch (err) {
    next(err);
  }
};

app.post(
  '/user',
  rescue(async (req, res) => {
    const user = req.body;
    const [valid, text] = User.isValid(user);
    if (!valid) return res.status(400).json({ message: text });
    await User.create(user);
    res.status(201).json({ message: 'User created' });
  }),
);

app.get('/user', async (req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (user.length === 0)
    return res.status(404).json({ message: 'User not Found' });
  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const user = req.body;
  const [valid, text] = User.isValid(user);
  if (!valid) return res.status(400).json({ message: text });
  const { id } = req.params;
  const users = await User.getAll();
  if (!users.find((user) => user.id === Number(id))) {
    return res.status(404).json({ message: 'User not Found' });
  }
  await User.update(id, user);
  res
    .status(200)
    .json({
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
});

app.listen(PORT, () => console.log(`Active on ${PORT}`));
