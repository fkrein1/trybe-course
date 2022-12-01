import Race from '../Races/Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static createdIntances = 0;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.createdIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.createdIntances;
  }
}
