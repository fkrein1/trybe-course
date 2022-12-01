const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('felipe', console.log)


it('Testa se função retorna palavra com letra maíscula', (done) => {
  uppercase('felipe', (result) => {
    try {
      expect(result).toBe('FELIPE');
      done()
    } catch (error) {
      done(error);
    }
  })
}) 
