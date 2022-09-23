import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static createdIntances = 0;
  private _energyType: EnergyType;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.createdIntances += 1;
    return this.createdIntances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
