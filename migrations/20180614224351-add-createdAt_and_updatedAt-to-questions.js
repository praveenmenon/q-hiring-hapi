'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('questions', 'createdAt', {
        type: Sequelize.DATE
      }),
      queryInterface.addColumn('questions', 'updatedAt', {
        type: Sequelize.DATE
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('questions', 'createdAt'),
      queryInterface.removeColumn('questions', 'updatedAt')
    ];
  }
};
