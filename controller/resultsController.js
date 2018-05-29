'use strict';
const model = require('../models');


exports.saveResults = (req, res) => {
  const examResults = req.payload.exam;
  let score = 0;
  let totalScore = 0;
  let itemsProcessed = 0;
  console.log('examResults:', examResults);

  const promise = new Promise((resolve, reject) => {
    examResults.answers.forEach((element, index, array) => {
      model.question.findOne({ raw: true, where: { id: element.id } }).then((question) => {
        if (question.answer === element.user_answer) score += 1;
        itemsProcessed++;
        if (itemsProcessed === array.length) {
          if (examResults.section_number === 1) {
            model.result.create({ userId: examResults.user_id, section_1: score }).then((resultInfo) => {
              resolve( { message: 'score successfully added', result: resultInfo });
            }).catch((err) => {
              console.log('error:', err)
              reject( { message: 'error in saving score', error: 'err' });
            });
          } else if (examResults.section_number === 2) {
            model.result.update({ section_2: score }, { where: { userId: examResults.user_id } }).then((resultUpdateInfo) => {
              resolve( { message: 'score successfully added' });
            }).catch((err) => {
              reject( { message: 'error in saving score', error: err });
            });
          } else {
            model.result.findOne({ raw: true, where: { userId: examResults.user_id } }).then((result) => {
              totalScore = result.section_1 + result.section_2 + score;
              model.result.update({ section_3: score, total_score: totalScore }, { where: { userId: examResults.user_id } }).then((resultUpdateInfo) => {
                resolve( { message: 'score successfully added' });
              }).catch((err) => {
                reject( { message: 'error in saving score', error: err });
              });
            });
          }
        }
      }).catch((err) => {
        reject({ message: 'error in calculating score', error: err })
      });
    });
  });

  return promise
}