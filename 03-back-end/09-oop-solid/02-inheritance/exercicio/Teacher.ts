import { v4 } from 'uuid';
import { IEmployee } from './IEmployee';
import { Person } from './person';
import { Subject } from './Subject';

class Teacher extends Person implements IEmployee {
  private _registration: string;
  private _subject: Subject;
  private _admissionDate: Date;

  constructor(
    _name: string,
    _birthDate: Date,
    subject: string,
    private _salary: number,
  ) {
    super(_name, _birthDate);
    this._registration = this.generateRegistration();
    this._subject = new Subject(subject);
    this.salary = _salary;
    this._admissionDate = new Date();
  }

  get registration() {
    return this._registration;
  }

  get subject() {
    return this._subject;
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
    return v4();
  }
}

const Fernanda = new Teacher(
  'Fernanda Soares',
  new Date('1980/01/25'),
  'matemática',
  5000,
);

console.log(Fernanda);
