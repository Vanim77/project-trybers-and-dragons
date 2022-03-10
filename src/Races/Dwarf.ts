import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(name, dexterity);
    Dwarf.addDwarf();
  }

  private static addDwarf(): void {
    this._dwarfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarfCount;
  }
}

export default Dwarf;
