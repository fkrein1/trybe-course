const searchEmployee = require('./check-id.js')

describe ('Function searchEmployee()', () => {
  it ('receinving an ID and detail check if correct', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it ('receing inexistent ID return error ID não identificada', () => {
    expect( () => {searchEmployee('3122-1',)}).toThrowError('ID não identificada');
  });

  it ('receinving correct ID but wrong detain return error Informação indisponível', () => {
    expect( () => {searchEmployee('4678-2', 'firstN')}).toThrowError('Informação indisponível');
  });
}) 