'use strict';
const axios = require('axios');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

exports.getQuestion = (element) => {
  return axios({
    method: 'get',
    url: `${config.abstractionRootUrl}getQuestion/${element.id}`
  }).then(function (response) {
    return response
  }).catch((error) => {
    return({ error: error }).code(422)
  });
}
