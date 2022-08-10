const { expect } = require('chai');
const sinon = require('sinon');

const movieModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Model: Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Model: Busca um filme por ID no BD', () => {
  describe('quando o filme existe', () => {
    const databaseMovie = [
      {
        id: 1,
        title: 'Example Movie',
        directed_by: 'Jane Dow',
        release_year: 1999,
      },
    ];

    before(async () => {
      sinon.stub(connection, 'execute').resolves([databaseMovie]);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('retornar um objeto com o filme', async () => {
      const response = await movieModel.getById(1);
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
    });
  });

  describe('quando o filme não existe', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('retorna undefined', async () => {
      const response = await movieModel.getById('xablau');
      expect(response).to.be.eq(undefined);
    });
  });
});
