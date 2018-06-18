const factory = require('factory-girl').factory;
const models = require('../../models');

module.exports.usersFactory = () => {
  factory.define('user', models.user, {
    email: 'test@qwinix.io',
    firstName: 'test',
    lastName: 'user',
    college: 'vvce',
    branch: 'Information Science',
    examBatch: '2018 batch',
    yearOfPassing: 2018,
    phoneNumber: 9916554300,
    city: 'Mysuru',
    password: 'Password@1',
    userRole: 'user'
  });
  factory.define('admin', models.user, {
    email: 'admin@qwinix.io',
    firstName: 'test',
    lastName: 'user',
    college: 'vvce',
    branch: 'Information Science',
    examBatch: '2018 batch',
    yearOfPassing: 2018,
    phoneNumber: 9916554300,
    city: 'Mysuru',
    password: 'Password@1',
    userRole: 'admin'
  });
}