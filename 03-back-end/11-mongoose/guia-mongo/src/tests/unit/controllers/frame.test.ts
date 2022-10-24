import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import FrameController from '../../../controllers/Frame';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import {
  frameArrayMockWithId,
  frameMock,
  frameMockWithId,
} from '../../mocks/frameMock';

describe('Frame Controller', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Create Frame', () => {
    beforeEach(() => {
      sinon.stub(frameService, 'create').resolves(frameMock);
    });
    it('Success', async () => {
      req.body = frameMock;
      await frameController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    beforeEach(() => {
      sinon.stub(frameService, 'readOne').resolves(frameMock);
    });
    it('Success', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('Read Frames', () => {
    beforeEach(() => {
      sinon.stub(frameService, 'read').resolves(frameArrayMockWithId);
    });
    it('Sucess', async () => {
      await frameController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameArrayMockWithId)).to
        .be.true;
    });
  });
});
