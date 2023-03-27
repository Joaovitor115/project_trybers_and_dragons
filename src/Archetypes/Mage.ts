import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);    
    Mage._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}