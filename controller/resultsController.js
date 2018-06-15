'use strict';
// const model = require('../models');
const moment = require('moment');
const async = require("async");

// const authentication = require('../modules/authenticate')

exports.saveResults = (req, res) => {
  const examResults = req.payload.exam;
  let score = 0;
  let totalScore = 0;
  let itemsProcessed = 0;
  console.log('examResults:', examResults);
  const promise = new Promise((resolve, reject) => {
    examResults.answers.forEach((element, index, array) => {
      // model.question.findOne({ raw: true, where: { id: element.id } }).then((question) => {
      //   if (question.answer === element.user_answer) score += 1;
      //   itemsProcessed++;
      //   if (itemsProcessed === array.length) {
      //     if (examResults.section_number === 1) {
      //       model.result.create({ userId: examResults.user_id, section_1: score }).then((resultInfo) => {
      //         resolve( { message: 'score successfully added', result: resultInfo });
      //       }).catch((err) => {
      //         console.log('error:', err)
      //         reject( { message: 'error in saving score', error: 'err' });
      //       });
      //     } else if (examResults.section_number === 2) {
      //       model.result.update({ section_2: score }, { where: { userId: examResults.user_id } }).then((resultUpdateInfo) => {
      //         resolve( { message: 'score successfully added' });
      //       }).catch((err) => {
      //         reject( { message: 'error in saving score', error: err });
      //       });
      //     } else {
      //       model.result.findOne({ raw: true, where: { userId: examResults.user_id } }).then((result) => {
      //         totalScore = result.section_1 + result.section_2 + score;
      //         model.result.update({ section_3: score, total_score: totalScore }, { where: { userId: examResults.user_id } }).then((resultUpdateInfo) => {
      //           resolve( { message: 'score successfully added' });
      //         }).catch((err) => {
      //           reject( { message: 'error in saving score', error: err });
      //         });
      //       });
      //     }
      //   }
      // }).catch((err) => {
      //   reject({ message: 'error in calculating score', error: err })
      // });
    });
  })
  return promise
}

exports.getResults = (req, res) => {
  const user = [];
  const result = {};
  const promise = new Promise((resolve, reject) =>{
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