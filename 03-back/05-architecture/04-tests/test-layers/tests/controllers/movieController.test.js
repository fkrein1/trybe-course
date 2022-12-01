const sinon = require('sinon');
const { expect } = require('chai');

const movieService = require('../../services/movieService');
const movieController = require('../../controllers/movieController');

describe('Controller: Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(movieService, 'create').resolves(false);
    });

    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await movieController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(movieService, 'create').resolves(true);
    });

    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await movieController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(
        true,
      );
    });
  });
});



/////////
describe('Controller: Ao chamar o controller de getById', () => {
  describe('quando o id informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {id: '999'};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(movieService, 'getById').resolves(false);
    });

    after(() => {
      movieService.getById.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await movieController.getById(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await movieController.getById(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é consultado com sucesso', () => {
    const returnedMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'getById').resolves(returnedMovie);
    });

    after(() => {
      movieService.getById.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await movieController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o send com o json do filme', async () => {
      await movieController.getById(request, response);

      expect(response.json.calledWith(returnedMovie)).to.be.equal(true);
    });
  });
});
