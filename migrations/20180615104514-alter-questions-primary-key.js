'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query('ALTER TABLE questions DROP id');
    return [
      queryInterface.sequelize.query('ALTER TABLE questions DROP id'),
      queryInterface.addColumn('questions', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
  }
};
