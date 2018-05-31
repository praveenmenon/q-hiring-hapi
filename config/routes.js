'use strict';
const Joi = require('joi');
const usersController = require('../controller/usersController')
const sessionsController = require('../controller/sessionsController')
const examsController = require('../controller/examsController')
const questionsController = require('../controller/questionsController')
const resultsController = require('../controller/resultsController')
const feedbackController = require('../controller/feedbackController')

const corsHeader = {
  origin: ['*'],
  headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'AuthKey', 'Authorization', 'Email'],
  credentials: true
};

const welcomeRoute = [{
		path: '/',
    method: 'GET',
    config: {
      cors: corsHeader
    },
		handler: (request, reply) => {
				return 'Welcome to Q Hiring';
		}
}];

const userRoutes = [{
		method: "POST",
		path: "/register",
		config: {
      description: 'User registration',
      notes: 'Creates user with a sessions.',
      auth: false,
      cors: corsHeader,
			validate: {
				payload: {
					email: Joi.string().required().email(),
					firstname: Joi.string().required(),
					lastname: Joi.string().required(),
					college: Joi.string().required(),
					branch: Joi.string().required(),
					batch: Joi.string().required().alphanum(),
					yearofpassing: Joi.number().min(2000).required(),
					phone: Joi.number().required(),
					city: Joi.string().required(),
          password: Joi.any().required(),
          passwordconfirmation: Joi.any().required()
				},
				failAction: async (request, h, err) => {
						throw err;
				}
			}
		},
		handler: usersController.createUser
  },
  {
    method: 'POST',
    path: "/login",
    config: {
      description: 'User Login',
      notes: 'User session gets created and gives back the instruction for',
      cors: corsHeader,
      auth: false,
      validate: {
        payload: {
          email: Joi.string().required().email(),
          password: Joi.any().required()
        },
        failAction: async (request, h, err) => {
          throw err;
        }
      }
    },
    handler: sessionsController.createSession    
  },
  {
    method: "DELETE",
    path: "/logout/{id}",
    config: {
      description: 'User logout ',
      notes: 'Deletes the users session from database',
      auth: 'jwt',
      cors: corsHeader
    },
    handler: sessionsController.deleteSession
  },
];

const questionRoutes = [{
  path: '/questions',
  method: 'GET',
  config: {
    auth: 'jwt',
    cors: corsHeader
  },
  handler: questionsController.getQuestions
}]

const examRoutes = [{
  path: '/instruction',
  method: 'GET',
  config: {
    auth: 'jwt',
    cors: corsHeader
  },
  handler: examsController.getInstructions
}];

const resultRoutes = [{
  path: '/results',
  method: 'POST',
  config: {
    auth: 'jwt',
    cors: corsHeader
  },
  handler: resultsController.saveResults
},
{
  path: '/users',
  method: 'GET',
  config: {
    auth: 'jwt',
    cors: corsHeader
  },
  handler: resultsController.getResults
}]

const feedbackRoutes = [{
  path: '/feedback',
  method: 'POST',
  config: {
    auth: 'jwt',
    cors: corsHeader
  },
  handler: feedbackController.saveFeedback
}]

module.exports = [].concat(welcomeRoute, userRoutes, examRoutes, questionRoutes, resultRoutes, feedbackRoutes);