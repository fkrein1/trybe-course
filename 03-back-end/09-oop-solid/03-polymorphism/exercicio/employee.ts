import { v4 as uuid } from 'uuid';
import { Person } from './person';

export class Employee extends Person {
  private _registration: string;
  private _admissionDate: Date;
  constructor(_name: string, _birthDate: Date, private _salary: number) {
    super(_name, _birthDate);
    this._registration = this.generateRegistration();
    this.salary = _salary;
    this._admissionDate = new Date();
  }

  get registration() {
    return this._registration;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value <= 0) throw new Error('O salário não pode ser negativo.');
    this._salary = value;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    this._admissionDate = value;
  }

  generateRegistration() {
    return uuid();
  }
}
