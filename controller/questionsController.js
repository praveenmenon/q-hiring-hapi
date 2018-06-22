'use strict';
const model = require('../models');
const authentication = require('../modules/authenticate')
const Sequelize = require('sequelize');
const axios = require('axios');
let exam = {};

exports.getQuestions = (req, res) => {
  return authentication.validateUser(req).then((userExist) => {
    return axios({
      method: 'get',
      url: 'http://localhost:3002/questions'
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