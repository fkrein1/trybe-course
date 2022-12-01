import express from 'express';
import PlantModel from './PlantModel';

const app = express();
app.use(express.json());

const plantModel = new PlantModel();

app.get('/plants', async (req, res) => {
  const plants = await plantModel.getPlants();
  res.status(200).json(plants);
});

app.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await plantModel.getPlantById(id);
  res.status(200).json(plant);
});

app.delete('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await plantModel.removePlantById(id);
  res.status(200).json(plant);
});

app.post('/plants', async (req, res) => {
  const body = req.body;
  const plant = await plantModel.savePlant(body);
  res.status(201).json(plant);
});

app.put('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const plant = await plantModel.editPlant(id, body);
  res.status(200).json(plant);
});

app.listen(3001, () => {
  console.log('Port 3001');
});
