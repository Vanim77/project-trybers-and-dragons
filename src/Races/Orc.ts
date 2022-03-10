import Race from './Race';

class Orc extends Race {
  private static _orcCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 74,
  ) {
    super(name, dexterity);
    Orc.addOrc();
  }

  private static addOrc(): void {
    this._orcCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcCount;
  }
}

export default Orc;
