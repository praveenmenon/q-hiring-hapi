'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      college: {
        type: Sequelize.STRING
      },
      branch: {
        type: Sequelize.STRING
      },
      examBatch: {
        type: Sequelize.STRING
      },
      yearOfPassing: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.BIGINT,
        unique: 'user_phone_number'        
      },
      city: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      userRole: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('users');
  }
};