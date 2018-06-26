'use strict';
const model = require('../models');
const authentication = require('../modules/authenticate')
const Sequelize = require('sequelize');
const axios = require('axios');
let exam = {};
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

exports.getQuestions = (req, res) => {
  return authentication.validateUser(req).then((userExist) => {
    return axios({
      method: 'get',
      url: config.abstractionRootUrl+'questions'
    }).then(function (response) {
      console.log('response:', response);
      return response.data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return error.response;
      } else if (error.request) {
        console.log(error.request);
        return error.request;
      } else {
        console.log('Error', error.message);
        return error.message;
      }
      return error.config;
      console.log(error.config);
    });
  });
};



exports.createQuestion = (req, resp) => {
  return authentication.validateUser(req).then((userExist) => {
    if (userExist.userRole != 'admin') {
      return resp.response({ message: 'You are not authorized to access the page!!' }).code(422)
    } else {
      const question = {
        title: req.payload.title,
        option_1: req.payload.option_1,
        option_2: req.payload.option_2,
        option_3: req.payload.option_3,
        option_4: req.payload.option_4,
        answer: req.payload.answer,
        section_id: req.payload.section_id
      }
      return axios({
        method: 'post',
        url: config.abstractionRootUrl+'createQuestion',
        data: question
      }).then(function (response) {
        console.log('response:', response);
        return response.data
      }).catch((error) => {
        if (error.response) {
          return error.response;
        } else if (error.request) {
          console.log(error.request);
          return error.request;
        } else {
          console.log('Error', error.message);
          return error.message;
        }
        return error.config;
        console.log(error.config);
      });
    }
  }).catch((err) => {
    return { message: 'User does not exist', }
  })
}

exports.allQuestions = (req, resp) => {
  return authentication.validateUser(req).then((userExist) => {
    if (userExist.userRole != 'admin') {
      return resp.response({ message: 'You are not authorized to access the page!!' }).code(422)
    } else {
      return axios({
        method: 'get',
        url: config.abstractionRootUrl+'allQuestions'
      }).then(function (response) {
        console.log('response:', response);
        return response.data
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return error.response;
        } else if (error.request) {
          console.log(error.request);
          return error.request;
        } else {
          console.log('Error', error.message);
          return error.message;
        }
        return error.config;
        console.log(error.config);
      });
    }
  }).catch((err) => {
    return { message: 'User does not exist', }
  })
}