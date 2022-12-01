const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  port: '3308',
  database: 'model_example',
});

module.exports = connection;