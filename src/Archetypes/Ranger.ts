import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);    
    Ranger._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return Ranger._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}