const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const server = require('../../app.js');
const models = require('../../models');
const sessionHelper = require("../support/sessionHelper");

var sessionsController = {};
var sessionDetails;

sessionsController.runTest = () => {
  describe("sessions controller", () => {
    before((done) => {
      models.user.sync({ force: true })
        .then(async () => {
          await factory.create('user').then(async (user) => {
          });
          done(null);
        })
        .catch((error) => {
          done(error);
        });
      models.session.sync({ force: true })
    });

    describe("create session", () => {
      it("Should create session with jwt", () => {
        return server.inject({
          method: 'POST',
          url: '/login',
          payload: {
            email: 'test@qwinix.io',
            password: "Password@1",
          }
        })
          .then(response => {
            assert.equal(response.statusCode, 200);
            assert.equal(response.result.session.dataValues.userId, 1);
            assert.equal(response.result.user.dataValues.email, 'test@qwinix.io');
            assert.equal(response.result.session.dataValues.id, 1);
          });
      })
    })

    describe("destroy session", () => {
      it("should destroy session", async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'DELETE',
          url: '/logout/1',
          headers: {
            Email: user.email,
            Authorization: token
          },
          payload: user
        })
        .then(response => {
          assert.equal(response.statusCode, 200);
        });
      });

      it("cannot destroy session due to wrong token", () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        return server.inject({
          method: 'DELETE',
          url: '/logout/1',
          headers: {
            Email: user.email,
            Authorization: "Bearer abcd"
          },
          payload: user
        })
          .then(response => {
            assert.equal(response.statusCode, 401);
            assert.equal(response.statusMessage,'Unauthorized');
          });
      });
    });
  });
};

module.exports = sessionsController;
