'use strict';
const models = require('../models');

exports.getInstructions = (req, res) => {
  return models.exam.findOne({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] }, where: {selected: true}}).then((exam) => {
    console.log('exam response:', exam);
    
    if(exam != null){
      exam['totalQuestions'] = exam.logicalQuestions + exam.quantitativeQuestions + exam.verbalQuestions;
      return {message: 'Exam details fetched successfully', exam: exam}
    } else {
      return {message: 'No exams are created'}
    }
  });
}