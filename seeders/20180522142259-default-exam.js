// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkInsert('exams', [{
//       examName: 'recruitment 2018',
//       logical: true,
//       quantitative: true,
//       verbal: true,
//       logicalQuestions: 20,
//       quantitativeQuestions: 20,
//       verbalQuestions: 20,
//       time: 60,
//       selected: true,
//       createdAt: Sequelize.literal('NOW()'),
//       updatedAt: Sequelize.literal('NOW()')
//     }], {});
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkDelete('exam', null, {});
//   }
// };
