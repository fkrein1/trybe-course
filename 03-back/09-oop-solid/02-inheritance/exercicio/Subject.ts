export class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3)
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    this._name = value;
  }
}