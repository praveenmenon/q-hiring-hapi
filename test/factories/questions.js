const factory = require('factory-girl').factory;
const models = require('../../models');

module.exports.questionsFactory = () => {
  // logical
  factory.define('question1', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: ARDUOUS',
    option_1: 'Hazardous',
    option_2: 'Difficult',
    option_3: 'Different',
    option_4: 'Pleasurable',
    answer: 'Difficult',
    section_id: 1
  });
  factory.define('question2', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: FORMULATE',
    option_1: 'Frame',
    option_2: 'Apply',
    option_3: 'Contemplate',
    option_4: 'Regularize',
    answer: 'Frame',
    section_id: 1
  });
  factory.define('question3', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: TRANSITIONAL',
    option_1: 'Extreme',
    option_2: 'Intermediate',
    option_3: 'Revolutionary',
    option_4: 'Changed',
    answer: 'Intermediate',
    section_id: 1
  });
  factory.define('question4', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: VIABLE',
    option_1: 'Rudimentary',
    option_2: 'Practical',
    option_3: 'Negative',
    option_4: 'Feasible',
    answer: 'Feasible',
    section_id: 1
  });
  factory.define('question5', models.question, {
    title: 'We are ___ to have him ____ here to make this function a great success',
    option_1: 'pleased, over',
    option_2: 'sure, come',
    option_3: 'wonderful, again',
    option_4: 'happy, arrive',
    answer: 'pleased, over',
    section_id: 1
  });

  // aptitude
  factory.define('question6', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: ARDUOUS',
    option_1: 'Hazardous',
    option_2: 'Difficult',
    option_3: 'Different',
    option_4: 'Pleasurable',
    answer: 'Difficult',
    section_id: 2
  });
  factory.define('question7', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: FORMULATE',
    option_1: 'Frame',
    option_2: 'Apply',
    option_3: 'Contemplate',
    option_4: 'Regularize',
    answer: 'Frame',
    section_id: 2
  });
  factory.define('question8', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: TRANSITIONAL',
    option_1: 'Extreme',
    option_2: 'Intermediate',
    option_3: 'Revolutionary',
    option_4: 'Changed',
    answer: 'Intermediate',
    section_id: 2
  });
  factory.define('question9', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: VIABLE',
    option_1: 'Rudimentary',
    option_2: 'Practical',
    option_3: 'Negative',
    option_4: 'Feasible',
    answer: 'Feasible',
    section_id: 2
  });
  factory.define('question10', models.question, {
    title: 'We are ___ to have him ____ here to make this function a great success',
    option_1: 'pleased, over',
    option_2: 'sure, come',
    option_3: 'wonderful, again',
    option_4: 'happy, arrive',
    answer: 'pleased, over',
    section_id: 2
  });
  
  // quant
  factory.define('question11', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: ARDUOUS',
    option_1: 'Hazardous',
    option_2: 'Difficult',
    option_3: 'Different',
    option_4: 'Pleasurable',
    answer: 'Difficult',
    section_id: 3
  });
  factory.define('question12', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: FORMULATE',
    option_1: 'Frame',
    option_2: 'Apply',
    option_3: 'Contemplate',
    option_4: 'Regularize',
    answer: 'Frame',
    section_id: 3
  });
  factory.define('question13', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: TRANSITIONAL',
    option_1: 'Extreme',
    option_2: 'Intermediate',
    option_3: 'Revolutionary',
    option_4: 'Changed',
    answer: 'Intermediate',
    section_id: 3
  });
  factory.define('question14', models.question, {
    title: 'Choose the word which is most nearly the SAME in meaning as the word given: VIABLE',
    option_1: 'Rudimentary',
    option_2: 'Practical',
    option_3: 'Negative',
    option_4: 'Feasible',
    answer: 'Feasible',
    section_id: 3
  });
  factory.define('question15', models.question, {
    title: 'We are ___ to have him ____ here to make this function a great success',
    option_1: 'pleased, over',
    option_2: 'sure, come',
    option_3: 'wonderful, again',
    option_4: 'happy, arrive',
    answer: 'pleased, over',
    section_id: 3
  });

}