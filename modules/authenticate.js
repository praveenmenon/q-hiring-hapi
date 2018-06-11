'use strict';
const models = require('../models');

const authentication = {}

authentication.validateUser = (req) => {
  return models.user.findOne({ where: { email: req.headers['email'] } }).then((userData) => {
    return userData.dataValues
  }).catch((error) => {
    return false
  });
} 

module.exports = authentication;