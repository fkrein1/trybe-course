const sum = require('./sum.js');

describe ('Function sum() ', () => {
  it ('returns 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it ('return 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it ('returns error when a string is used', () =>{
    expect( () => {sum(4, '4')}).toThrowError('parameters must be numbers');
  })

})