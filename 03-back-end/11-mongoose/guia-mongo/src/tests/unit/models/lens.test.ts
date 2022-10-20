import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import {
  correctID,
  deletedLens,
  incorrectID,
  lensArrayMockWithId,
  lensMock,
  lensMockWithId,
} from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(lensArrayMockWithId);
    sinon.stub(Model, 'deleteOne').resolves(deletedLens);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('sucessfully created', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.equal(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('successufully found', async () => {
      const lens = await lensModel.readOne(correctID);
      expect(lens).to.be.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      let testError;
      try {
        await lensModel.readOne(incorrectID);
      } catch (error: any) {
        testError = error.message;
      }
      expect(testError).to.be.eq('InvalidMongoId');
    });
  });

  describe('read all lens', async () => {
    it('sucessfully read', async () => {
      const lens = await lensModel.read();
      expect(lens).to.be.equal(lensArrayMockWithId);
    });
  });

  describe('delete a lens', () => {
    it('successfully deleted', async () => {
      const result = await lensModel.destroy(correctID);
      expect(result.acknowledged).to.be.eq(true);
      expect(result.deletedCount).to.be.eq(1);
    });
  });
});
