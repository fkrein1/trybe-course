const numberCheck = require('../ex01');
const { expect } = require('chai');

describe('Check numberchek function', () => {
  describe('when number is positve', () => {
    it('has correct return', () => {
      const result = numberCheck(2);
      expect(result).equals('positivo');
    });
    it('has correct type', () => {
      const result = numberCheck(2);
      expect(result).a('string');
    });
  });
  describe('when number is negative', () => {
    it('has correct return', () => {
      const result = numberCheck(-2);
      expect(result).equals('negativo');
    });
    it('has correct type', () => {
      const result = numberCheck(2);
      expect(result).a('string');
    });
  });
  describe('when number is neutral', () => {
    it('has correct return', () => {
      const result = numberCheck(0);
      expect(result).equals('neutro');
    });
    it('has correct type', () => {
      const result = numberCheck(2);
      expect(result).a('string');
    });
  });
  describe('when input is not a number', () => {
    it('has correct return', () => {
      const result = numberCheck('dasda');
      expect(result).equals('o valor deve ser um número');
    });
    it('has correct type', () => {
      const result = numberCheck(2);
      expect(result).a('string');
    });
  });
});
