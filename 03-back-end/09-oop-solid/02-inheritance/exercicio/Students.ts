import { v4 } from 'uuid';
import { Person } from './Person';

export class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(_name: string, _birthDate: Date) {
    super(_name, _birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  private generateEnrollment() {
    return v4();
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) throw new Error('Máximo de 4 notas');
    this._examsGrades = grades;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(grades: number[]) {
    if (grades.length > 2) throw new Error('Máximo de 2 notas');
    this._worksGrades = grades;
  }

  sumGrades() {
    return [...this._examsGrades, ...this._worksGrades].reduce(
      (acc, cur) => acc + cur,
      0,
    );
  }

  sumAverageGrade() {
    return (
      this.sumGrades() / [...this._examsGrades, ...this._worksGrades].length
    );
  }
}
