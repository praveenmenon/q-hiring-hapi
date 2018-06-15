'use strict';
// const model = require('../models');
const authentication = require('../modules/authenticate')
// const Sequelize = require('sequelize');
let exam = {};

exports.getQuestions = (req, res) => {
  return authentication.validateUser(req).then((userExist) => {
    // return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 1 }, order: [ Sequelize.fn('RANDOM') ], limit: 5}).then((verbal) => {
    //   exam['verbal'] = verbal;
    //   verbal.forEach((element, index) => {
    //     exam['verbal'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
    //     delete exam['verbal'][index].option_1; delete exam['verbal'][index].option_2; delete exam['verbal'][index].option_3; delete exam['verbal'][index].option_4; 
    //   });
    //   return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 3 }, order: [Sequelize.fn('RANDOM')], limit: 5 }).then((quantitative) => {
    //     exam['quantitative'] = quantitative;
    //     quantitative.forEach((element, index) => {
    //       exam['quantitative'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
    //       delete exam['quantitative'][index].option_1; delete exam['quantitative'][index].option_2; delete exam['quantitative'][index].option_3; delete exam['quantitative'][index].option_4; 
    //     });
    //     return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 2 }, order: [Sequelize.fn('RANDOM')], limit: 5 }).then((logical) => {
    //       exam['logical'] = logical;
    //       logical.forEach((element, index) => {
    //         exam['logical'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
    //         delete exam['logical'][index].option_1; delete exam['logical'][index].option_2; delete exam['logical'][index].option_3; delete exam['logical'][index].option_4; 
    //       });
    //       return { message: 'successfully fetched all questions', exam: exam }        
    //     }).catch((err) => {
    //       console.log('error in logical section:', err);
    //       return { message: 'error in logical section', error: err }
    //     });
    //   }).catch((err) => {
    //     console.log('error in quantitative section:', err);
    //     return { message: 'error in quantitative section', error: err }
    //   });
    // }).catch((err) => {
    //   console.log('error in verbal section:', err);
    //   return { message: 'error in verbal section', error: err }
    // });
  }).catch((err) => {
    return {message: 'User does not exist', }
  })
}