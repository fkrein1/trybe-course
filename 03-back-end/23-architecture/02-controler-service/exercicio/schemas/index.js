const Joi = require('joi');

const schemaFullZip = Joi.object({
  cep: Joi.string().regex(/^\d+$/).length(8).required(),
  logradouro: Joi.string().min(1).max(50).required(),
  bairro: Joi.string().min(1).max(20).required(),
  localidade: Joi.string().min(1).max(20).required(),
  uf: Joi.string().length(2).required(),
}).required();

const schemaZip = Joi.object({
  cep: Joi.string().regex(/^\d+$/).length(8).required()
});

module.exports = { schemaFullZip, schemaZip };
