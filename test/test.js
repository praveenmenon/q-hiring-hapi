const assert = require('chai').assert;
const request = require('http')
const server = require('../app.js');
const factory = require('factory-girl').factory;
const models = require('../models');
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');
const questionsController = require('./controllers/questionsController');
const examsController = require('./controllers/examsController');
const resultsController = require('./controllers/resultsController');


describe('Server testing', () => {
  it('validate if server is running', () => {
    return server.inject({
      method: 'GET',
      url: '/'
    })
    .then(response => {
      assert.deepEqual(response.statusCode, 200)
    })
  });
});

usersController.runTest();
sessionsController.runTest();
questionsController.runTest();
examsController.runTest();
resultsController.runTest();