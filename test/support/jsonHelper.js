var jsonHelper = {}

jsonHelper.getUser = {
  message: "Success",
  user: {
    email: "p123@yopmail.com",
    firstName: "prakash",
    lastName: "lingaiah",
    password: "Qwinix123"
  }
}

jsonHelper.examDetails = {
  "message": 'Exam details fetched successfully',
  "exam": {
    "id": 1,
    "examName": 'testExam2018',
    "logical": true,
    "logicalQuestions": 5,
    "quantitative": true,
    "quantitativeQuestions": 5,
    "verbal": true,
    "verbalQuestions": 5,
    "time": 20,
    "selected": true,
    "totalQuestions": 15
  }
}

jsonHelper.logicalAnswers = {
  "exam": {
    "section": "logical",
    "section_number": 1,
    "user_email": "pmenon@qwinix.io",
    "user_id": "1",
    "answers": [
      {
        "id": 2,
        "user_answer": "Frame"
      },
      {
        "id": 1,
        "user_answer": "Difficult"
      },
      {
        "id": 3,
        "user_answer": "Intermediate"
      },
      {
        "id": 4,
        "user_answer": "Feasible"
      },
      {
        "id": 5,
        "user_answer": "pleased, over"
      }
    ]
  }
}

jsonHelper.verbalAnswers = {
  exam: {
    section: "verbal",
    section_number: 2,
    user_email: "pmenon@qwinix.io",
    user_id: "1",
    answers: [
      {
        id: 1,
        title: 'Choose the word which is most nearly the SAME in meaning as the word given: ARDUOUS',
        options: ['Hazardous', 'Difficult', 'Different', 'Pleasurable'],
        user_answer: "Difficult"
      },
      {
        id: 2,
        title: "Choose the word which is most nearly the SAME in meaning as the word given: FORMULATE",
        options: ["Frame", "Apply", "Contemplate", "Regularize"],
        user_answer: "Frame"
      },
      {
        id: 3,
        title: "While trying to pull out a robbery, a criminal came across a password lock. He has the following information with him that can assist him in cracking the password. \n\nCan you help him out?\n\nThe password is a 5-digit number.\nThe 4th digit is 4 more than the 2nd one.\nThe 3rd digit is 3 less than the 2nd one.\nThe 1st digit is three times the 5th digit.\nThree pairs of digits sum up to 11.",
        options: ["65292", "64282", "63171", "62050"],
        user_answer: "Intermediate"
      },
      {
        id: 4,
        title: "Marathon is to race as hibernation is to",
        options: ["winter", "bear", "dream", "sleep"],
        user_answer: "Feasible"
      },
      {
        id: 5,
        title: "In a certain code LEARNING is written as LGNINRAE. How will SURPRISE be written in that code?",
        options: ["ESRIPRUS", "RUSEPSIR", "SESIRPRU", "ESIRPRSU"],
        user_answer: "pleased, over"
      }
    ]
  }
}

jsonHelper.verbalAnswers = {
  exam: {
    section: "quantitative",
    section_number: 3,
    user_email: "pmenon@qwinix.io",
    user_id: "1",
    answers: [
      {
        id: 1,
        title: 'Choose the word which is most nearly the SAME in meaning as the word given: ARDUOUS',
        options: ['Hazardous', 'Difficult', 'Different', 'Pleasurable'],
        user_answer: "Difficult"
      },
      {
        id: 2,
        title: "Choose the word which is most nearly the SAME in meaning as the word given: FORMULATE",
        options: ["Frame", "Apply", "Contemplate", "Regularize"],
        user_answer: "Frame"
      },
      {
        id: 3,
        title: "While trying to pull out a robbery, a criminal came across a password lock. He has the following information with him that can assist him in cracking the password. \n\nCan you help him out?\n\nThe password is a 5-digit number.\nThe 4th digit is 4 more than the 2nd one.\nThe 3rd digit is 3 less than the 2nd one.\nThe 1st digit is three times the 5th digit.\nThree pairs of digits sum up to 11.",
        options: ["65292", "64282", "63171", "62050"],
        user_answer: "Intermediate"
      },
      {
        id: 4,
        title: "Marathon is to race as hibernation is to",
        options: ["winter", "bear", "dream", "sleep"],
        user_answer: "Feasible"
      },
      {
        id: 5,
        title: "In a certain code LEARNING is written as LGNINRAE. How will SURPRISE be written in that code?",
        options: ["ESRIPRUS", "RUSEPSIR", "SESIRPRU", "ESIRPRSU"],
        user_answer: "pleased, over"
      }
    ]
  }
}
module.exports = jsonHelper;