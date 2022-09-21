export interface IPlant {
  id: string;
  breed: string;
  needsSun: boolean;
  origin: string;
  size: number;
  specialCare?: { waterFrequency: number };
}

export interface IOpsInfo {
  createdPlants: number;
}

export class Plant implements IPlant {
  public readonly id: string;
  public readonly breed: string;
  public readonly needsSun: boolean;
  public readonly origin: string;
  public readonly size: number;
  public readonly specialCare: { waterFrequency: number };

  constructor(plant: IPlant) {
    this.id = plant.id;
    this.breed = plant.breed;
    this.needsSun = plant.needsSun;
    this.origin = plant.origin;
    this.size = plant.size;
    this.specialCare = { waterFrequency: this.getwaterFrequency() };
  }

  private getwaterFrequency(): number {
    return this.needsSun
      ? this.size * 0.77 + (this.origin === 'Brazil' ? 8 : 7)
      : (this.size / 2) * 1.33 + (this.origin === 'Brazil' ? 8 : 7);
  }
}
