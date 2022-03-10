import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerCount = 0;
  
  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.addNecromancer();
  }

  private static addNecromancer(): void {
    this._necromancerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._necromancerCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
