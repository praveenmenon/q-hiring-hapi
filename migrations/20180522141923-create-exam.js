'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      examName: {
        type: Sequelize.STRING,
        unique: true
      },
      logical: {
        type: Sequelize.BOOLEAN
      },
      logicalQuestions: {
        type: Sequelize.INTEGER
      },
      quantitative: {
        type: Sequelize.BOOLEAN
      },
      quantitativeQuestions: {
        type: Sequelize.INTEGER
      },
      verbal: {
        type: Sequelize.BOOLEAN
      },
      verbalQuestions: {
        type: Sequelize.INTEGER
      },
      time: {
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
    return queryInterface.dropTable('exams');
  }
};