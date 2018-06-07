const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const questionsFactory = require('../factories/questions').questionsFactory();
const sessionHelper = require("../support/sessionHelper");
const server = require('../../app.js');
const models = require('../../models');

var questionsController = {};
chai.use(chaiJsonEqual);

questionsController.runTest = () => {
  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        factory.create('question1'); factory.create('question2'); factory.create('question3'); factory.create('question4'); factory.create('question5'); factory.create('question6'); factory.create('question7'); factory.create('question8'); factory.create('question9'); factory.create('question10'); factory.create('question11'); factory.create('question12'); factory.create('question13'); factory.create('question14'); factory.create('question15');
        done(null);
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get questions', () => {
      it('should fetch questions for an exam', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        console.log('sessionDetails:', sessionDetails);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/questions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 200)
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        done(null);
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get questions', () => {
      it('should give error when no questions are not available', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);

        console.log('sessionDetails:', sessionDetails);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/questions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 204)
        })
      });
    });
  });
}

module.exports = questionsController;