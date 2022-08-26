const bodyParser = require('body-parser');
const { Patients, Plans, Surgeries, Patient_surgeries } = require('./models');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', async (req, res) => {
  const patients = await Patients.findAll({
    include: { model: Plans, as: 'plans' },
  });
  res.status(200).json(patients);
});

app.get('/surgeries', async (req, res) => {
  const patients = await Patients.findAll({
    include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } },
  });
  res.status(200).json(patients);
});

app.get('/plans/:id', async (req, res) => {
  const { id } = req.params;
  const patients = await Patients.findAll({
    where: { plan_id: id },
  });
  res.status(200).json(patients);
});

app.get('/surgeries/secret', async (req, res) => {
  const patients = await Patients.findAll({
    include: {
      model: Surgeries,
      as: 'surgeries',
      through: { attributes: [] },
      attributes: { exclude: 'doctor' },
    },
  });
  res.status(200).json(patients);
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
