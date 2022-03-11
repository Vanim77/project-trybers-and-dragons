import Character from '../Character';
import IFighter from '../Fighter';
import ISimpleFighter from '../Fighter/SimpleFighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Character | IFighter | ISimpleFighter,
    private _monsters: Monster[] | ISimpleFighter[],
  ) {
    super(_character as Character | IFighter);
  }

  public get character(): Character | IFighter | ISimpleFighter {
    return this._character;
  }

  public get monsters(): Monster[] | ISimpleFighter[] {
    return this._monsters;
  }

  public override fight(): number {
    this._monsters.forEach((monster) => {
      monster.receiveDamage(this._character.strength);
      monster.attack(this._character);
    });
    return this._character.lifePoints > 0 ? 1 : -1;
  }
}

export default PVE;
