const Services = require('../services');
function pong(req, res) {
  res.status(200).json({ message: 'pong!' });
}

async function getZip(req, res) {
  const { data, message, code } = await Services.getZip(req.params);
  if (message) return res.status(code).json(message);
  res.status(code).json(data);
}

async function addZip(req, res) {
  const { data, message, code } = await Services.addZip(req.body);
  if (message) return res.status(code).json(message);
  res.status(code).json(data);
}

module.exports = { pong, getZip, addZip };
