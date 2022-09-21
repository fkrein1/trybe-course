// Plants.ts

import fs from 'fs/promises';
import { IOpsInfo, IPlant, Plant } from './Plant';

export default class PlantModel {
  private readonly plantsFile = 'plantsData.json';
  private readonly opsFile = 'opsInfo.json';

  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public async getPlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

    return removedPlant;
  }

  public async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const formatedNewPlant = new Plant(newPlant);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return formatedNewPlant;
      return plant;
    });

    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
    return formatedNewPlant;
  }

  public async savePlant(plant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = new Plant(plant);
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
    return newPlant;
  }
}
