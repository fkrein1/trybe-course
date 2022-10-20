import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import {
  correctID,
  deletedFrame,
  frameArrayMockWithId,
  frameMock,
  frameMockWithId,
  incorrectID,
} from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(frameArrayMockWithId);
    sinon.stub(Model, 'deleteOne').resolves(deletedFrame);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.equal(frameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne(correctID);
      expect(framesFound).to.be.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne(incorrectID);
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('read all frames', () => {
    it('successfully read', async () => {
      const framesFound = await frameModel.read();
      expect(framesFound).to.be.equal(frameArrayMockWithId);
    });
  });

  describe('delete a frame', () => {
    it('successfully deleted', async () => {
      const result = await frameModel.destroy(correctID);
      expect(result.acknowledged).to.be.eq(true);
      expect(result.deletedCount).to.be.eq(1);
    });
  });
});
