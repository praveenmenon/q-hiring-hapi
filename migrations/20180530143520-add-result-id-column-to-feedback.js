'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('feedbacks', 'resultId', { type: Sequelize.INTEGER, allowNull: false});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('feedbacks', 'resultId');
  }
};
