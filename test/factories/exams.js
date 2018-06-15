const factory = require('factory-girl').factory;
const models = require('../../models');

module.exports.examsFactory = () => {
  console.log('inside exam factory');
  factory.define('exam', models.exam, {
    examName: 'testExam2018',
    logical: true,
    logicalQuestions: 5,
    quantitative: true,
    quantitativeQuestions: 5,
    verbal: true,
    verbalQuestions: 5,
    time: 20,
    selected: true
  });
}