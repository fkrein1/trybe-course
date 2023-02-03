function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Function myFizzBuzz()', () => {
  it('retuns fizzbuzz when divisible by 3 and 5', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('return fizz when only divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('returns buzz when only divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('returns number when not divisible by 3 or 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('returns false when input is not number', () => {
    expect(myFizzBuzz('x')).toBe(false);
  });
});

