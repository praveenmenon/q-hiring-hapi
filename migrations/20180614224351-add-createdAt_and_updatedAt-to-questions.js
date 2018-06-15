'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // queryInterface.addColumn(users,
    //   'createdAt',
    //   'updatedAt',
    //   Sequelize.TIMESTAMP
    // );
    return [
      queryInterface.addColumn('User', 'createdAt', {
        type: Sequelize.TIMESTAMP
      }),
      queryInterface.addColumn('Users', 'updatedAt', {
        type: Sequelize.TIMESTAMP,
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('Users', 'createdAt'),
      queryInterface.removeColumn('User', 'updatedAt')
    ];
  }
};
