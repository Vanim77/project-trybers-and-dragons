import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger.addRanger();
  }

  private static addRanger(): void {
    this._rangerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._rangerCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
