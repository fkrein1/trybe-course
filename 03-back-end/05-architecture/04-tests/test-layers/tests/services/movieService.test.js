const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('Service: Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(movieModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      movieModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Model: Busca um filme por ID no BD', () => {
  describe('o filme existe', () => {
    const returnedMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    before(() => {
      sinon.stub(movieModel, 'getById').resolves(returnedMovie);
    });

    after(() => {
      movieModel.getById.restore();
    });

    it('retorna os dados do filme', async () => {
      const response = await movieService.getById(1)
      expect(response).to.have.all.keys(
        'id',
        'title',
        'directedBy',
        'releaseYear',
      );
      expect(response.id).to.be.eq(1);
      expect(response.releaseYear).to.be.eq(1999);
      expect(response.title).to.be.eq('Example Movie');
      expect(response.directedBy).to.be.eq('Jane Dow');
    })
  });

  describe('o filme não existe', () => {
    before(() => {
      sinon.stub(movieModel, 'getById').resolves(undefined);
    });

    after(() => {
      movieModel.getById.restore();
    });
    it('retorna booleano falso com id númerico', async () => {
      const response = await movieService.getById(999)
      expect(response).to.be.eq(false);
    })

    it('retorna booleano falso com id não numérico', async () => {
      const response = await movieService.getById('xablau')
      expect(response).to.be.eq(false);
    })

    it('retorna booleano falso com id vazio', async () => {
      const response = await movieService.getById()
      expect(response).to.be.eq(false);
    })
  })
});
