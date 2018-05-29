'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('question', {
    title: DataTypes.STRING(1234),
    option_1: DataTypes.STRING(1234),
    option_2: DataTypes.STRING(1234),
    option_3: DataTypes.STRING(1234),
    option_4: DataTypes.STRING(1234),
    answer: DataTypes.STRING(1234),
    section_id: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};