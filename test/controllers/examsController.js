const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const examFactory = require('../factories/exams').examsFactory();
const sessionHelper = require("../support/sessionHelper");
const server = require('../../app.js');
const models = require('../../models');
const examJson = require('../support/jsonHelper').examDetails;


var examsController = {};
chai.use(chaiJsonEqual);

examsController.runTest = () => {
  describe('exams controller', () => {
    // drop questions table
    before((done) => {
      models.exam.sync({ force: true }).then(() => {
        factory.create('exam');
        done(null);
      }).catch((error) => {
        done(error);
      });
    });

    describe('Get instructions', () => {
      it('should fetch instructions for an exam', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        
        return server.inject({
          method: 'GET',
          url: '/instruction',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.message, examJson.message)
        })
      });
    });
  });
}

module.exports = examsController;
