import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);    
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return Necromancer._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}