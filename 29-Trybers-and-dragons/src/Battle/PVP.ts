import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player2: Fighter;
  constructor(protected _player1: Fighter, player2: Fighter) {
    super(_player1);

    this._player2 = player2;
  }

  fight(): number {
    for (let index = 0; this.player.lifePoints > 0 
      && this._player2.lifePoints > 0; index += 1) {
      this.player.attack(this._player2);     
      this._player2.attack(this.player);
    }    
    if (this.player.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}

export default PVP;
