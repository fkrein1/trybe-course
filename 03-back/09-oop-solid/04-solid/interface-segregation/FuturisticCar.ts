// ./FuturisticCar.ts

import { IVehicleDrive, IVehicleFly } from './interfaces';

export class FuturisticCar implements IVehicleDrive, IVehicleFly {
  drive(): void {
    console.log('Driving a futuristic car');
  }

  fly(): void {
    console.log('Flying a futuristic car');
  }
}

export class Car implements IVehicleDrive {
  drive(): void {
    console.log('Driving a car');
  }
}

export class AirPlane implements IVehicleFly {
  fly(): void {
    console.log('Flying a airplane');
  }
}
