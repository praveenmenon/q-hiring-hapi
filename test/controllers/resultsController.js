const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const sessionHelper = require("../support/sessionHelper");
const jsonHelper = require('../support/jsonHelper');
const server = require('../../app.js');
const models = require('../../models');

var resultsController = {};
chai.use(chaiJsonEqual);

resultsController.runTest = () => {
  describe('results controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(async () => {
        await factory.create('question1'); await factory.create('question2'); await factory.create('question3'); await factory.create('question4'); await factory.create('question5');
        models.result.sync({ force: true })
        done(null);
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get results', () => {
      it('should calculate results for logical section', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        console.log('sessionDetails:', sessionDetails);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'POST',
          url: '/results',
          headers: {
            Email: user.email,
            Authorization: token
          },
          payload: jsonHelper.logicalAnswers
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.message, 'score successfully added')
          assert.equal(response.result.result.dataValues.section_1, 5)
        })
      });
    });

  });
}

module.exports = resultsController;