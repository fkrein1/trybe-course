const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: '3308',
  database: 'rest_exercicios',
});

module.exports = connection;
