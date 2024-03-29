import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    for (let index = 0; index < 500; index += 1) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints === -1) return 1;
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1) return -1;
    }
    return 1;
  }
}
