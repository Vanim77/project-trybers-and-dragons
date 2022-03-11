import IEnergy from '../Energy';
import ISimpleFighter from './SimpleFighter';

export interface IFighter extends ISimpleFighter {
  defense: number,
  energy?: IEnergy,
  attack(enemy: IFighter): void,
  special(enemy: IFighter): void,
  levelUp(): void,
}
