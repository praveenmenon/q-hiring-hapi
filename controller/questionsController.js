'use strict';
const model = require('../models');
const authentication = require('../modules/authenticate')
const Sequelize = require('sequelize');
let exam = {};

exports.getQuestions = (req, res) => {
  return authentication.validateUser(req).then((userExist) => {
    return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 1 }, order: [ Sequelize.fn('RANDOM') ], limit: 5}).then((verbal) => {
      exam['verbal'] = verbal;
      verbal.forEach((element, index) => {
        exam['verbal'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
        delete exam['verbal'][index].option_1; delete exam['verbal'][index].option_2; delete exam['verbal'][index].option_3; delete exam['verbal'][index].option_4;
      });
      return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 3 }, order: [Sequelize.fn('RANDOM')], limit: 5 }).then((quantitative) => {
        exam['quantitative'] = quantitative;
        quantitative.forEach((element, index) => {
          exam['quantitative'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
          delete exam['quantitative'][index].option_1; delete exam['quantitative'][index].option_2; delete exam['quantitative'][index].option_3; delete exam['quantitative'][index].option_4;
        });
        return model.question.findAll({ raw: true, attributes: { exclude: ['answer', 'createdAt', 'updatedAt', 'section_id'] }, where: { section_id: 2 }, order: [Sequelize.fn('RANDOM')], limit: 5 }).then((logical) => {
          exam['logical'] = logical;
          logical.forEach((element, index) => {
            exam['logical'][index]['options'] = [element.option_1, element.option_2, element.option_3, element.option_4];
            delete exam['logical'][index].option_1; delete exam['logical'][index].option_2; delete exam['logical'][index].option_3; delete exam['logical'][index].option_4;
          });
          if (exam['verbal'].length === 0 || exam['quantitative'].length === 0 || exam['logical'].length === 0) return res.response().code(204)
            return res.response({ message: 'successfully fetched all questions', exam: exam }).code(200)
        }).catch((err) => {
          console.log('error in logical section:', err);
          return { message: 'error in logical section', error: err }
        });
      }).catch((err) => {
        console.log('error in quantitative section:', err);
        return { message: 'error in quantitative section', error: err }
      });
    }).catch((err) => {
      console.log('error in verbal section:', err);
      return { message: 'error in verbal section', error: err }
    });
  }).catch((err) => {
    return {message: 'User does not exist', }
  })
}

exports.createQuestion = (req, resp) => {
  return authentication.validateUser(req).then((userExist) => {
    if (userExist.userRole != 'admin') {
      return resp.response({ message: 'You are not authorized to access the page!!' }).code(422)
    } else {
      const question = {
        title: req.payload.title,
        option_1: req.payload.option_1,
        option_2: req.payload.option_2,
        option_3: req.payload.option_3,
        option_4: req.payload.option_4,
        answer: req.payload.answer,
        section_id: req.payload.section_id
      }
      return model.question.create(question)
        .then((successResponse) => {
          return resp.response({ message: "Question added successfully" }).code(200)
        })
        .catch((error) => {
          return resp.response({ error: error }).code(422)
        })
    }
  }).catch((err) => {
    return { message: 'User does not exist', }
  })
}

exports.allQuestions = (req, resp) => {
  return authentication.validateUser(req).then((userExist) => {
    if (userExist.userRole != 'admin') {
      return resp.response({ message: 'You are not authorized to access the page!!'}).code(422)
    } else {
      return model.question.findAll({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] } }).then((questions) => {
        return resp.response({ message: "All questions listed successfully.", data: questions }).code(200)
      }).catch((error) => {
        return resp.response({ error: error }).code(422)
      })
    }
  }).catch((err) => {
    return { message: 'User does not exist', }
  })
}
