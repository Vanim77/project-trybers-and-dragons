import Archetype, { Mage } from './Archetypes';
import IEnergy from './Energy';
import { IFighter } from './Fighter/Fighter';
import ISimpleFighter from './Fighter/SimpleFighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements IFighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: IEnergy;

  constructor(name: string) {
    this._race = new Elf(name, 5);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): IEnergy {
    // se usar 'return this._energy' aqui, teoricamente eu estaria mudando o valor
    // já que o amount gera um número aleatório cada vez que é chamado
    // por isso aqui é setado o valor fixo

    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: ISimpleFighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }

  public special(enemy: IFighter): void {
    // Aqui a lógica é o seguinte:
    // o player (Character) vai rodar 1d20, e independente do dano aplicado
    // ele vai gastar metade de sua mana / stamina
    // porém, ele vai dar um dano baseado no número do dado rolado multiplicado pela quantidade de energia atual

    const d20 = getRandomInt(1, 20);
    const damage = d20 * this._energy.amount;

    enemy.receiveDamage(damage);

    this._energy.amount = Math.round(this._energy.amount / 2);
  }

  public levelUp(): void {
    // Sempre que este método for chamado, os atributos abaixo
    // terão um incremento de no mínimo 1 e no máximo 10 pontos;

    const MAX_LIFEPOINTS_RACE = this._race.maxLifePoints;

    this._maxLifePoints += getRandomInt(1, 10);

    // O atributo maxLifePoints nunca poderá ser maior que o maxLifePoints da sua raça
    if (this._maxLifePoints > MAX_LIFEPOINTS_RACE) {
      this._maxLifePoints = MAX_LIFEPOINTS_RACE;
    }

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: 10 };
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;
