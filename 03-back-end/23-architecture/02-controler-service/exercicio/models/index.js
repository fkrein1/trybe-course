const connection = require('./connection');

async function getZip({ cep }) {
  const [zip] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?',
    [cep],
  );
  return zip[0];
}

async function addZip({ cep, logradouro, bairro, localidade, uf }) {
  await connection.execute(
    'INSERT INTO ceps (cep,logradouro,bairro,localidade,uf) VALUES (?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf],
  );
}

module.exports = { getZip, addZip };
