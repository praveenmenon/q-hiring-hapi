'use strict';
const models = require('../models');
const jwt = require('jsonwebtoken');
const privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

exports.createUser = (req, res) =>{
    const userInfo = {
      email: req.payload.email,
      firstName: req.payload.firstname,
      lastName: req.payload.lastname,
      college: req.payload.college,
      branch: req.payload.branch,
      examBatch: req.payload.batch,
      yearOfPassing: req.payload.yearofpassing,
      phoneNumber: req.payload.phone,
      city: req.payload.city,
      password: req.payload.password,
      userRole: 'user'
    };
    return models.user.create(userInfo).then((userInfo) => {
      const session = {
        valid: true, // this will be set to false when the person logs out
        authToken: jwt.sign({ email: req.payload.email }, privateKey), // a random session id
        email: req.payload.email,
        userId: userInfo.id,
        exp: new Date().getTime() + 30 * 60 * 1000 // expires in 70 minutes time
      }
      client.set(session.email, JSON.stringify(session));
      return userInfo.createSession({ authToken: session.authToken}).then((userSession) => {
        return { message: 'You have successfully signed up.', user: userInfo, session: userSession };
      }).catch((err) => {
        return { error: err };
      });
    }).catch((err) => {
      if (err.name = 'SequelizeUniqueConstraintError') return { error: 'User already exist' };
      return { error: 'User not created'};
    });
};

