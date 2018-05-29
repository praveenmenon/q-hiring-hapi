'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('exams', 'selected', { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('exams','selected');
  }
};
