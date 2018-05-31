'use strict';
const models = require('../models');
const jwt = require('jsonwebtoken');
const privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

exports.createSession = (req, res) => {
  return models.user.findOne({ where: { email: req.payload.email } }).then(function(user) {
    if (!user.validPassword(req.payload.password)) {
      return { error: 'invalid password' }
    } else {
      return user.createSession({ authToken: jwt.sign({ email: req.payload.email }, privateKey)}).then((userSession) => {
        return { message: 'You have successfully signed up.', user: user, session: userSession };
      }).catch((err) => {
        return { error: err };
      });
    }
  }).catch((err) => {
    return { error: 'User does not exist'}
  })
}

exports.deleteSession = (req, res) => {
  return models.session.destroy({ where: {userId: req.params.id }}).then((sessionDetails) => {
    return { message: 'User logged out successfully!'}
  }).catch((err) => {
    return { error: 'Cannot logout the user'}
  });
}