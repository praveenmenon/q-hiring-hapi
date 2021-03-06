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
      return userInfo.createSession({ authToken: jwt.sign({ email: req.payload.email }, privateKey, { expiresIn: '60m'})}).then((userSession) => {
        return { message: 'You have successfully signed up.', user: userInfo, session: userSession, status: 200};
      }).catch((err) => {
        return { error: err };
      });
    }).catch((err) => {
      return { error: err};
    });
};
