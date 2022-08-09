const Services = require('../services');
function pong(req, res) {
  res.status(200).json({ message: 'pong!' });
}

async function getZip(req, res) {
  const { cep } = req.params;
  const { response, status } = await Services.getZip(cep);
  if (response.error) return res.status(status).json(response);
  res.status(status).json(response);
}

module.exports = { pong, getZip };
