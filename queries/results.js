'use strict';
const axios = require('axios');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

exports.createResult = (result) => {
  return axios({
    method: 'post',
    url: `${config.abstractionRootUrl}createResult`,
    data: result
  }).then(function (response) {
    if (response.status === 200) {
      return ({ message: response.data.message, resultId: response.data.resultId });
    } else {
      return ({ error: response.data.error }).code(422)
    }
  }).catch((error) => {
    return ({ error: error }).code(422)
  })
}

exports.updateResult = (resultId, result) => {
  return axios({
    method: 'put',
    url: `${config.abstractionRootUrl}updateResult/${resultId}`,
    data: result
  }).then(function (response) {
    if (response.status === 200) {
      return ({ message: response.data.message, resultId: resultId });
    } else {
      return ({ error: response.data.error });
    }
  }).catch((error) => {
    return ({ error: error }).code(422)
  })
}

exports.getResult = (resultId) => {
  return axios({
    method: 'get',
    url: `${config.abstractionRootUrl}getResult/${resultId}`
  }).then(function (response) {
    return response
  }).catch((error) => {
    return({ error: error }).code(422)
  })
}