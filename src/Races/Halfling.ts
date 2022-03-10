import Race from './Race';

class Halfling extends Race {
  private static _halflingCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling.addHalfling();
  }

  private static addHalfling(): void {
    this._halflingCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflingCount;
  }
}

export default Halfling;
