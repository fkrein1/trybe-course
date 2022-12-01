class Student {
  private _enrollmentFee: number;
  private _name: string;
  private _testScores: number[];
  private _courseWorkScores: number[];

  constructor(e: number, n: string, t: number[], c: number[]) {
    this._enrollmentFee = e;
    this._name = n;
    this._testScores = t;
    this._courseWorkScores = c;
  }
  totalScore() {
    return [...this._testScores, ...this._courseWorkScores].reduce(
      (acc, cur) => acc + cur,
      0,
    );
  }
  averageScore() {
    return (
      this.totalScore() /
      [...this._testScores, ...this._courseWorkScores].length
    );
  }
}

const felipe = new Student(1000, 'Felipe', [8, 6, 10, 9], [9, 9]);

console.log(felipe.averageScore());
console.log(felipe.totalScore());

class StudentNext {
  constructor(
    private _enrollmentFee: number,
    private _name: string,
    private _testScores: number[],
    private _courseWorkScores: number[],
  ) {}
  totalScore() {
    return [...this._testScores, ...this._courseWorkScores].reduce(
      (acc, cur) => acc + cur,
      0,
    );
  }
  averageScore() {
    return (
      this.totalScore() /
      [...this._testScores, ...this._courseWorkScores].length
    );
  }
  get enrollmentFee() {
    return this._enrollmentFee
  }
}

const felipe2 = new StudentNext(1000, 'Felipe', [8, 6, 10, 9], [9, 9]);

console.log(felipe2.averageScore());
console.log(felipe2.totalScore());
console.log(felipe2.enrollmentFee);

