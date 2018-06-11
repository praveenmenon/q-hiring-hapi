const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const sessionHelper = require("../support/sessionHelper");
const jsonHelper = require('../support/jsonHelper');
const server = require('../../app.js');
const models = require('../../models');

var feedBackController = {};
var sessionDetails;

chai.use(chaiJsonEqual);

feedBackController.runTest = () => {
	describe('feedback controller', () => {
		describe('Give feedback', () => {
			it('should be able to create a feedback after taking test', async () => {
				const user = {
					email: 'test@qwinix.io',
					password: 'Password@1'
				}
				sessionDetails = await sessionHelper.signMeIn(user);
				var token = sessionDetails.session.authToken;
				return server.inject({
					method: 'POST',
					url: '/feedback',
					headers: {
						Email: user.email,
						Authorization: token
					},
					payload: jsonHelper.feedBack.success
				}).then((response) => {
					assert.equal(response.statusCode, 200)
					assert.equal(response.result.message, 'Feedback submitted successfully.')
				})
			});

			it('should not be able to create a feedback for invalid entry', async () => {
				const user = {
					email: 'test@qwinix.io',
					password: 'Password@1'
				}
				sessionDetails = await sessionHelper.signMeIn(user);
				var token = sessionDetails.session.authToken;
				return server.inject({
					method: 'POST',
					url: '/feedback',
					headers: {
						Email: user.email,
						Authorization: token
					},
					payload: jsonHelper.feedBack.invalid_input
				}).then((response) => {
					assert.equal(response.statusCode, 400)
					assert.equal(response.result.message, 'child "quantitative" fails because ["quantitative" must be a number]')
				})
			});

			it('should not be able to create a feedback', async () => {
				const user = {
					email: 'test@qwinix.io',
					password: 'Password@1'
				}
				sessionDetails = await sessionHelper.signMeIn(user);
				var token = sessionDetails.session.authToken;
				return server.inject({
					method: 'POST',
					url: '/feedback',
					headers: {
						Email: "test123@qwinix.io",
						Authorization: token
					},
					payload: jsonHelper.feedBack.success
				}).then((response) => {
					assert.equal(response.result.error, 'Error in submitting feedback')
				})
			});

			it('should not be able to create a feedback if not authorised', async () => {
				const user = {
					email: 'test@qwinix.io',
					password: 'Password@1'
				}
				return server.inject({
					method: 'POST',
					url: '/feedback',
					headers: {
						Email: "test123@qwinix.io",
						Authorization: "dummytoken"
					},
					payload: jsonHelper.feedBack.success
				}).then((response) => {
					assert.equal(response.result.error, 'Unauthorized')
				})
			});

		});

	});
}

module.exports = feedBackController;