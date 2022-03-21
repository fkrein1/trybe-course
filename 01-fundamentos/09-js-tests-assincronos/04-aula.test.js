const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

it('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 2, (result) => {
    try {
      expect(result).toBe(7);
      done();
    } catch (error) {
      done(error);
    }
  });
});