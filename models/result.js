'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('result', {
    userId: DataTypes.INTEGER,
    section_1: DataTypes.INTEGER,
    section_2: DataTypes.INTEGER,
    section_3: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER
  }, {});
  Result.associate = function(models) {
    // associations can be defined here
    Result.hasOne(models.feedback, { foreignKey: 'resultId' });
    Result.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Result;
};