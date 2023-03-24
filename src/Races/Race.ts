export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
  }

  public static createdRacesInstances = (): string => {
    throw new Error('Not implemented');
  };

  abstract get maxLifePoints(): number;

  get dexterity() {
    return this._dexterity;
  }

  get name() {
    return this._name;
  }
}