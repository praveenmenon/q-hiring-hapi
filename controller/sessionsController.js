'use strict';
const models = require('../models');
const jwt = require('jsonwebtoken');
const privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

exports.createSession = (req, res) => {
  return models.user.findOne({ where: { email: req.payload.email } }).then(function(user) {
    if (!user.validPassword(req.payload.password)) {
      return { error: 'invalid password' }
    } else {
      const session = {
        valid: true, // this will be set to false when the person logs out
        authToken: jwt.sign({ email: req.payload.email }, privateKey), // a random session id
        email: req.payload.email,
        userId: user.id,
        exp: new Date().getTime() + 30 * 60 * 1000 // expires in 70 minutes time
      }
      client.set(session.email, JSON.stringify(session));  
      return user.createSession({ authToken: session.authToken}).then((userSession) => {
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