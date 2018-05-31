'use strict';
module.exports = (sequelize, DataTypes) => {
  var Feedback = sequelize.define('feedback', {
    userId: DataTypes.INTEGER,
    verbal: DataTypes.STRING,
    logical: DataTypes.STRING,
    quantitative: DataTypes.STRING,
    overall: DataTypes.STRING,
    description: DataTypes.STRING(1234)
  }, {});
  Feedback.associate = function(models) {
    // associations can be defined here
    Feedback.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Feedback.belongsTo(models.result, {
      foreignKey: {
        name: 'resultId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Feedback;
};