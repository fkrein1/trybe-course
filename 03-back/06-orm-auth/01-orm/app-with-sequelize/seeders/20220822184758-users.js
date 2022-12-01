'use strict';

module.exports = {
  /**
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {import('sequelize').QueryInterface} queryInterface
   */

  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'Leonardo',
          email: 'leo@test.com',
          phone_num: '+5511998983737',
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          fullName: 'JEduardo',
          email: 'edu@test.com',
          phone_num: '+5511999983737',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
