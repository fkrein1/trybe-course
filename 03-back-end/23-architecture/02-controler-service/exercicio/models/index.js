const connection = require('./connection');

async function getZip(zipCode) {
  const [cep] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?',
    [zipCode],
  );
  return cep[0];
}

module.exports = { getZip };
