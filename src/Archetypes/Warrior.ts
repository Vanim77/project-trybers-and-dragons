import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorCount = 0;
  
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.addWarrior();
  }

  private static addWarrior(): void {
    this._warriorCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._warriorCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
