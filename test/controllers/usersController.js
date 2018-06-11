const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const usersFactory = require('../factories/users').usersFactory();
const server = require('../../app.js');
const userJson = require('../support/jsonHelper').getUser;
const models = require('../../models');

var usersController = {};
chai.use(chaiJsonEqual);

usersController.runTest = () => {
  describe('users controller', () => {
    // drop users table 
    before((done) => {
      models.user.sync({ force: true }).then(() => {
        done(null);
      }).catch((err) => { 
        done(error);
      });
    });
    
    describe('register user', () => {
      it('should not create user if invalid params', () => {
        return server.inject({
          method: 'POST',
          url: '/register',
          payload: {
            email: '',
            firstName: 'test',
            lastName: 'user',
            college: 'vvce',
            branch: 'Information Science',
            batch: '2018 batch',
            yearOfPassing: 2018,
            phoneNumber: 9916554300,
            city: 'Mysuru',
            password: 'Password@1',
            userRole: 'user'
          }
        }).then((response) => {
          assert.equal(response.statusCode, 400)
          assert.equal(response.result.error, 'Bad Request')
          assert.equal(response.result.message, 'child "email" fails because ["email" is not allowed to be empty]')
        })
      });

      it('should create user', () => {
        return server.inject({
          method: 'POST',
          url: '/register',
          payload: {
            email: 'test@qwinix.io',
            firstname: 'test',
            lastname: 'user',
            college: 'vvce',
            branch: 'Information Science',
            batch: 'b1',
            yearofpassing: 2018,
            phone: 9916554300,
            city: 'Mysuru',
            password: 'Password@1',
            passwordconfirmation: 'Password@1'
          }
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.message, 'You have successfully signed up.')
        })
      })

      it('should not create duplicate users', () => {
        return server.inject({
          method: 'POST',
          url: '/register',
          payload: {
            email: 'test@qwinix.io',
            firstname: 'test',
            lastname: 'user',
            college: 'vvce',
            branch: 'Information Science',
            batch: 'b1',
            yearofpassing: 2018,
            phone: 9916554300,
            city: 'Mysuru',
            password: 'Password@1',
            passwordconfirmation: 'Password@1'
          }
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.error, 'User already exist')
        })
      });
    });
  });
}

module.exports = usersController;