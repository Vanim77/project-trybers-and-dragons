import Race from './Race';

class Elf extends Race {
  private static _elfCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 99,
  ) {
    super(name, dexterity);
    Elf.addElf();
  }

  private static addElf(): void {
    this._elfCount += 1;
  }

  static createdRacesInstances(): number {
    return this._elfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
