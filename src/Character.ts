import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

const randomStatus = () => Math.floor(Math.random() * 10) + 1;

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(
    name: string,
  ) {
    this._dexterity = randomStatus();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = 45.5;
    this._lifePoints = 45.5;
    this._strength = randomStatus();
    this._defense = randomStatus();
    this._energy = {
      type_: 'mana',
      amount: randomStatus(),
    };
  }

  get dexterity() {
    return this._dexterity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }
  
  get strength() {
    return this._strength;
  }

  get energy() {
    return {
      amount: this._energy.amount,
      type_: this._energy.type_,
    };
  }

  get defense() {
    return this._defense;
  }

  get archetype() {
    return this._archetype;
  }

  get race() {
    return this._race;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage; 
    }
    if (damage <= 0) {
      this._lifePoints -= 1; 
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += randomStatus();
    this._strength += randomStatus();
    this._dexterity += randomStatus();
    this._defense += randomStatus();
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength + randomStatus());
  }
}