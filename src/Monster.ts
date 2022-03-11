import ISimpleFighter from './Fighter/SimpleFighter';

class Monster implements ISimpleFighter {
  constructor(protected _lifePoints = 85, private _strength = 63) { }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints;

    this._lifePoints -= damage;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: ISimpleFighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }
}

export default Monster;
