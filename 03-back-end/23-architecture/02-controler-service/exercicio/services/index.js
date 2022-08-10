const Models = require('../models');
const { schemaFullZip, schemaZip } = require('../schemas');

async function getZip({ cep }) {
  const { error } = schemaZip.validate({ cep });
  if (error)
    return {
      message: { error: { code: 'invalidData', message: 'CEP inválido' } },
      code: 400,
    };
  const zip = await Models.getZip({ cep });
  if (!zip)
    return {
      message: { error: { code: 'notFound', message: 'CEP não encontrado' } },
      code: 404,
    };
  return { data: zip, code: 200 };
}

async function addZip({ cep, logradouro, bairro, localidade, uf }) {
  const { error } = schemaFullZip.validate({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
  if (error)
    return {
      message: {
        error: { code: 'invalidData', message: error.details[0].message },
      },
      code: 400,
    };
  const zip = await Models.getZip({ cep });
  if (zip)
    return {
      message: { error: { code: 'alreadyExists', message: 'CEP já existente' } },
      code: 404,
    };
  await Models.addZip({ cep, logradouro, bairro, localidade, uf });
  return { data: { cep, logradouro, bairro, localidade, uf }, code: 200 };
}

module.exports = { getZip, addZip };
