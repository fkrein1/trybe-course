import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _energy: Energy;
  private _strength: number = Character.randomAtributte();
  private _defense: number = Character.randomAtributte();
  constructor(private _name: string) {
    this._race = new Elf(_name, Character.randomAtributte());
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomAtributte(),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get name(): string {
    return this._name;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += Character.randomAtributte();
    this._strength += Character.randomAtributte();
    this._defense += Character.randomAtributte();
    this._dexterity += Character.randomAtributte();
    this._energy.amount = 10;
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength * 1.5);
    console.log(
      `When my dragons are grown, we will take back 
      what was stolen from me and destroy those who wronged me! 
      We will lay waste to armies and burn cities to the ground!`,
    );
  }

  static randomAtributte(): number {
    return Math.ceil(Math.random() * 10);
  }
}
