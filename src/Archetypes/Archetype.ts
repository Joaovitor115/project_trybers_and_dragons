import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances = (): number => {
    throw new Error('Not implemented');
  };

  abstract get energyType(): EnergyType;
}