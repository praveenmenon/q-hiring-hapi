'use strict';
const models = require('../models');

exports.checkToken = (req, res) => {
  console.log('inside checkToken');
  
  return { message: 'successfully accessed auth path' };
};

