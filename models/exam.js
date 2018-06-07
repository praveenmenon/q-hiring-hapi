'use strict';
module.exports = (sequelize, DataTypes) => {
  var exam = sequelize.define('exam', {
    examName: DataTypes.STRING,
    logical: DataTypes.BOOLEAN,
    logicalQuestions: DataTypes.INTEGER,
    quantitative: DataTypes.BOOLEAN,
    quantitativeQuestions: DataTypes.INTEGER,
    verbal: DataTypes.BOOLEAN,
    verbalQuestions: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    selected: DataTypes.BOOLEAN
  }, {});
  exam.associate = function(models) {
    // associations can be defined here
  };
  return exam;
};