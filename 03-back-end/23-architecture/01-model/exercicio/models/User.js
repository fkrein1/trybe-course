const connection = require('./connection');

async function create({ firstName, lastName, email, password }) {
  await connection.execute(
    'INSERT INTO users (first_name,last_name,email,user_password) VALUE (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );
}
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function isValid({ firstName, lastName, email, password }) {
  if (!firstName || firstName.length === 0)
    return [false, 'firstName is invalid'];
  if (!lastName || lastName.length === 0) return [false, 'lastName is invalid'];
  if (!email || !validateEmail(email)) return [false, 'email is invalid'];
  if (!password || password.length < 6)
    return [false, 'password length must be at least 6 characters long'];
  return [true, 'ok'];
}

async function getAll() {
  const [users] = await connection.execute(
    'SELECT id, first_name,last_name,email FROM users',
  );
  return users.map((user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  }));
}

async function getById(id) {
  const [user] = await connection.execute(
    'SELECT first_name,last_name,email FROM users WHERE id=?',
    [id],
  );

  return user.map((user) => ({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  }));
}

async function update(id, { firstName, lastName, email, password }) {
  await connection.execute(
    'UPDATE users SET first_name=?, last_name=?,email=?,user_password=? WHERE id=?',
    [firstName, lastName, email, password, id],
  );
}

module.exports = { create, isValid, getAll, getById, update };
