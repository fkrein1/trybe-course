const Models = require('../models');

async function getZip(zipCode) {
  const zipRegex = /\b\d{8}\b/g;
  if (!zipRegex.test(zipCode))
    return {
      response: { error: { code: 'invalidData', message: 'CEP inválido' } },
      status: 400,
    };
  const zip = await Models.getZip(zipCode);
  if (!zip)
    return {
      response: { error: { code: 'notFound', message: 'CEP não encontrado' } },
      status: 404,
    };
  return { response: zip, status: 200 };
}

module.exports = { getZip };
