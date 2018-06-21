const chai = require('chai');
const chaiJsonEqual = require('chai-json-equal');
const assert = chai.assert;
const should = chai.should();
const factory = require('factory-girl').factory;
const questionsFactory = require('../factories/questions').questionsFactory();
const sessionHelper = require("../support/sessionHelper");
const server = require('../../app.js');
const models = require('../../models');

var questionsController = {};
chai.use(chaiJsonEqual);

questionsController.runTest = () => {
  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        factory.create('question1'); factory.create('question2'); factory.create('question3'); factory.create('question4'); factory.create('question5'); factory.create('question6'); factory.create('question7'); factory.create('question8'); factory.create('question9'); factory.create('question10'); factory.create('question11'); factory.create('question12'); factory.create('question13'); factory.create('question14'); factory.create('question15');
        models.user.sync({ force: true }).then(() => {
          factory.create('user');
        }).then(() => {
          done(null);
        })
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get questions', () => {
      it('should fetch questions for an exam', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        console.log('sessionDetails:', sessionDetails);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/questions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 200)
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        models.user.sync({ force: true }).then(() => {
          factory.create('user');
        }).then(() => {
          done(null);
        })
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get questions', () => {
      it('should give error when no questions are not available', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);

        console.log('sessionDetails:', sessionDetails);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/questions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 204)
        })
      });
    });
  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        factory.create('question1'); factory.create('question2'); factory.create('question3'); factory.create('question4'); factory.create('question5'); factory.create('question6'); factory.create('question7'); factory.create('question8'); factory.create('question9'); factory.create('question10'); factory.create('question11'); factory.create('question12'); factory.create('question13'); factory.create('question14'); factory.create('question15');
        models.user.sync({ force: true }).then(() => {
          factory.create('admin');
        }).then(()=>{
          done(null);
        })
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get all the questions', () => {
      it('should fetch questions in admin page', async () => {
        const user = {
          email: 'admin@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/allQuestions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 200)
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
        factory.create('question1'); factory.create('question2'); factory.create('question3'); factory.create('question4'); factory.create('question5'); factory.create('question6'); factory.create('question7'); factory.create('question8'); factory.create('question9'); factory.create('question10'); factory.create('question11'); factory.create('question12'); factory.create('question13'); factory.create('question14'); factory.create('question15');
        models.user.sync({ force: true }).then(() => {
          factory.create('user');
        }).then(() => {
          done(null);
        })
      }).catch((err) => {
        done(error);
      });
    });

    describe('Get all the questions', () => {
      it('should show error if not logged in as admin', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/allQuestions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 422)
          assert.equal(response.result.message, "You are not authorized to access the page!!")
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
      models.user.sync({ force: true }).then(() => {
        factory.create('admin');
      }).then(() => {
        done(null);
      }).catch((error)=>{
        done(error);
      })
      });
    });

    describe('Get all the questions', () => {
      it('should show error if no questions available', async () => {
        const user = {
          email: 'admin@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        return server.inject({
          method: 'GET',
          url: '/allQuestions',
          headers: {
            Email: user.email,
            Authorization: token
          },
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.data.length, 0)
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
      models.user.sync({ force: true }).then(() => {
        factory.create('admin');
      }).then(() => {
        done(null);
      }).catch((error)=>{
        done(error);
      })
      });
    });

    describe('create questions', () => {
      it('should create questions if logged in as admin', async () => {
        const user = {
          email: 'admin@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        var questionData = {
          title: "sample title",
          option_1:"option 1",
          option_2: "option_2",
          option_3: "option_3",
          option_4: "option_4",
          answer: "answer",
          section_id: 1
        }
        return server.inject({
          method: 'POST',
          url: '/createQuestion',
          headers: {
            Email: user.email,
            Authorization: token
          },
          payload: questionData
        }).then((response) => {
          assert.equal(response.statusCode, 200)
          assert.equal(response.result.message, "Question added successfully")
        })
      });
    });

  });

  describe('questions controller', () => {
    // drop questions table
    before((done) => {
      models.question.sync({ force: true }).then(() => {
      models.user.sync({ force: true }).then(() => {
        factory.create('user');
      }).then(() => {
        done(null);
      }).catch((error)=>{
        done(error);
      })
      });
    });

    describe('create questions', () => {
      it('should show error if not logged in as admin', async () => {
        const user = {
          email: 'test@qwinix.io',
          password: 'Password@1'
        }
        sessionDetails = await sessionHelper.signMeIn(user);
        var token = sessionDetails.session.authToken;
        var questionData = {
          title: "sample title",
          option_1:"option 1",
          option_2: "option_2",
          option_3: "option_3",
          option_4: "option_4",
          answer: "answer",
          section_id: 1
        }
        return server.inject({
          method: 'POST',
          url: '/createQuestion',
          headers: {
            Email: user.email,
            Authorization: token
          },
          payload: questionData
        }).then((response) => {
          assert.equal(response.statusCode, 422)
          assert.equal(response.result.message, "You are not authorized to access the page!!")
        })
      });
    });

  });

}

module.exports = questionsController;