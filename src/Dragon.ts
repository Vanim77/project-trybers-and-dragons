import Monster from './Monster';

class Dragon extends Monster {
  constructor(private _lifepoints = 999) {
    super();
  }

  public get lifePoints() {
    return this._lifePoints;
  }
}

export default Dragon;
