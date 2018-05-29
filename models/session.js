'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('session', {
    userId: DataTypes.INTEGER,
    authToken: DataTypes.STRING(1234)
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
    Session.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Session;
};