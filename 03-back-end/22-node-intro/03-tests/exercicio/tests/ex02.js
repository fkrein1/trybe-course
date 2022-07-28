const createFile = require('../ex02');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs/promises');

describe('Test createFile function', () => {
  describe('Creates file', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').resolves();
    });
    after(() => {
      fs.writeFile.restore();
    });
    it('returns ok after creation', () => {
      const result = createFile('arquivo.txt', 'dummy text');
      expect(result).equals('ok');
    });
  });
});
