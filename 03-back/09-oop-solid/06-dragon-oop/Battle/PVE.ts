import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enviroment: (Fighter | SimpleFighter)[];
  constructor(player: Fighter, enviroment: (Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._enviroment = enviroment;
  }

  fight(): number {
    for (let index = 0; index < 500; index += 1) {
      this._enviroment.forEach((monster) => {
        this._player.attack(monster);
      });
      if (this._enviroment.every((monster) => monster.lifePoints === -1)) {
        return 1;
      }
      this._enviroment.forEach((monster) => {
        monster.attack(this.player);
      });
      if (this._player.lifePoints === -1) return -1;
    }
    return 1;
  }
}
