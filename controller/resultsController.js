'use strict';
const model = require('../models');
const moment = require('moment');
const async = require("async");
const axios = require('axios');
const abstractionRootUrl = require('../abstractionUrl');

const authentication = require('../modules/authenticate')

exports.saveResults = (req, res) => {
  const examResults = req.payload.exam;
  let score = 0;
  let totalScore = 0;
  let itemsProcessed = 0;
  const promise = new Promise((resolve, reject) => {
    examResults.answers.forEach((element, index, array) => {
      return authentication.validateUser(req).then((userExist) => {
        return getQuestion(element).then(function (response) {
          if (response.status === 200) {
            if (response.data.question.answer === element.user_answer) score += 1;
            itemsProcessed++;
            if (itemsProcessed === array.length) {
              const result = {
                userId: examResults.user_id,
                section1: null,
                section2: null,
                section3: null,
                total_score: null
              }
              if (examResults.section_number === 1) {
                result.section1 = score;
                return createResult(result).then(function(response){
                  resolve({ message: response.message, resultId: response.resultId });
                })
              } else if (examResults.section_number === 2) {
                result.section2 = score;
                return updateResult(examResults.resultId, result).then(function(response){
                  resolve({ message: response.message, resultId: response.resultId });
                })
              } else {
                return getResult(examResults.resultId).then(function (response) {
                  if (response.status === 200) {
                    result.section3 = score;
                    result.total_score = response.data.result.section_1 + response.data.result.section_2;
                    return updateResult(response.data.result.id, result).then(function(response){
                      resolve({ message: response.message, resultId: response.resultId });
                    })
                  } else {
                    resolve({ error: response.data.error });
                  }
                })
              }
            }
          } else {
            resolve({ error: response.data.error });
          }
        })
      });
    });
  })
  return promise
}

const updateResult = (resultId, result) => {
  return axios({
    method: 'put',
    url: `${abstractionRootUrl}updateResult/${resultId}`,
    data: result
  }).then(function (response) {
    if (response.status === 200) {
      return({ message: response.data.message, resultId: resultId });
    } else {
      return({ error: response.data.error });
    }
  }).catch((error) => {
    return({ error: response.data.error });
  })
}

const createResult = (result) => {
  return axios({
    method: 'post',
    url: `${abstractionRootUrl}createResult`,
    data: result
  }).then(function (response) {
    if (response.status === 200) {
      return({ message: response.data.message, resultId: response.data.resultId });
    } else {
      return({ error: response.data.error });
    }
  }).catch((error) => {
    return({ error: error });
  })
}

const getQuestion = (element) => {
  return axios({
    method: 'get',
    url: `http://localhost:3002/findOneQuestion/${element.id}`
  }).then(function (response) {
    return response
  }).catch((error) => {
    return({ error: error });
  });
}

const getResult = (resultId) => {
  return axios({
    method: 'get',
    url: `${abstractionRootUrl}getResult/${resultId}`
  }).then(function (response) {
    return response
  }).catch((error) => {
    return({ error: error });
  })
}

exports.getResults = (req, res) => {
  const user = [];
  const result = {};
  const promise = new Promise((resolve, reject) => {
    model.result.findAll().then((results) => {
      results.forEach((examResult, index, array) => {
        result['id'] = examResult.id;
        result['exam_date'] = moment(examResult.createdAt).format('MM/DD/YYYY');
        result['exam_time'] = moment(examResult.createdAt).format('h:mm a');
        result['total_score'] = examResult.total_score;
        result['results'] = {
          'logical': examResult.section_1,
          'quantitative': examResult.section_2,
          'verbal': examResult.section_3
        };
        const userData = examResult.getUser().then((userDetails) => {
          result['first_name'] = userDetails.firstName;
          result['last_name'] = userDetails.lastName;
          result['exam_batch'] = userDetails.examBatch;
          result['phone_number'] = userDetails.phoneNumber;
          result['email'] = userDetails.email;
        }).catch((err) => {
          console.log('error:', err)
          reject({ message: 'error in fetching user details', error: 'err' });
        });
        const feedbackData = examResult.getFeedback().then((feedbackDetails) => {
          if (!feedbackDetails) {
            result['feedback'] = {
              'logical': '',
              'quantitative': '',
              'verbal': '',
              'overall': ''
            }
          } else {
            result['feedback'] = {
              'logical': feedbackDetails.logical,
              'quantitative': feedbackDetails.quantitative,
              'verbal': feedbackDetails.verbal,
              'overall': feedbackDetails.overall
            }
          }
          user.push(result);
          if (array.length === index + 1) {
            resolve({ message: 'score successfully added', user: user });
          }
        }).catch((err) => {
          console.log('error:', err)
          reject({ message: 'error in fetching feedback details', error: 'err' });
        });
      });
    }).catch((err) => {
      console.log('error:', err)
      reject({ message: 'error in fetching user details', error: 'err' });
    });
  });
  return promise
}