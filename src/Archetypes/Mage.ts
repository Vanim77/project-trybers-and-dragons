import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageCount = 0;
  
  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage.addMage();
  }

  private static addMage(): void {
    this._mageCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._mageCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
