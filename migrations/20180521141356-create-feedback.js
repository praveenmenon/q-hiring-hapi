'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      verbal: {
        type: Sequelize.STRING
      },
      logical: {
        type: Sequelize.STRING
      },
      quantitative: {
        type: Sequelize.STRING
      },
      overall: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1234)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feedbacks');
  }
};