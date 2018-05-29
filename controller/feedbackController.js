'use strict';
const models = require('../models');

exports.saveFeedback = (req, res) =>{
    const feedbackInfo = {
      userId: req.payload.email,
      overall: req.payload.feedback[0].user_answer,
      verbal: req.payload.feedback[1].user_answer,
      logical: req.payload.feedback[2].user_answer,
      quantitative: req.payload.feedback[3].user_answer,
      description: req.payload.description
    }
  return models.feedback.create(feedbackInfo).then((feedbackInfo) => {
      return { message: 'Feedback submitted successfully.' };
    }).catch((err) => {
      return { error: 'Error in submitting feedback'};
    });
};

