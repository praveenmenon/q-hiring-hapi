'use strict';
const models = require('../models');
const authentication = require('../modules/authenticate')

exports.saveFeedback = (req, res) => {
  const feedbackInfo = {
    overall: req.payload.overall.toString(),
    verbal: req.payload.verbal.toString(),
    logical: req.payload.logical.toString(),
    quantitative: req.payload.quantitative.toString(),
    description: req.payload.description,
    resultId: 1
  }
  return authentication.validateUser(req).then((userExist) => {
      feedbackInfo['userId'] = userExist.id
      return models.feedback.create(feedbackInfo).then((feedbackInfo) => {
        return { message: 'Feedback submitted successfully.' };
      }).catch((err) => {
        return { error: 'Error in submitting feedback' };
      });
  }).catch((err) => {
    return { message: 'User does not exist', }
  })
};

