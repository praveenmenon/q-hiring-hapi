'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    college: DataTypes.STRING,
    branch: DataTypes.STRING,
    examBatch: DataTypes.STRING,
    yearOfPassing: DataTypes.INTEGER,
    phoneNumber: DataTypes.BIGINT,
    city: DataTypes.STRING,
    password: DataTypes.STRING,
    userRole: DataTypes.STRING
  },{
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
  });

  // Instance methods
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }


  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.result, { foreignKey: 'userId' });
    User.hasMany(models.feedback, { foreignKey: 'userId' });
    User.hasMany(models.session, {as: 'Session', foreignKey: 'userId' });
  };
  return User;
};