'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(1234)
      },
      option_1: {
        type: Sequelize.STRING(1234)
      },
      option_2: {
        type: Sequelize.STRING(1234)
      },
      option_3: {
        type: Sequelize.STRING(1234)
      },
      option_4: {
        type: Sequelize.STRING(1234)
      },
      answer: {
        type: Sequelize.STRING(1234)
      },
      section_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('questions');
  }
};