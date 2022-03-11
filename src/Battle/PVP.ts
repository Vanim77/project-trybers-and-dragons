import Character from '../Character';
import IFighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _character1: Character | IFighter,
    private _character2: Character | IFighter,
  ) {
    super(_character1);
  }

  get character1() {
    return this._character1;
  }

  get character2() {
    return this._character2;
  }

  public fight(): number {
    // Se o Character 1 for mais forte, ele começa atacando 2 vezes
    // Caso contrário, o Character 2 começa atacando 2 vezes

    while (this._character1.lifePoints > 0 && this._character2.lifePoints > 0) {
      this._character1.attack(this._character2);
      this._character2.attack(this._character1);
    }

    return this._character1.lifePoints > 0 ? 1 : -1;
  }
}

export default PVP;
