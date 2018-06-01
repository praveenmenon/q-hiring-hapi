'use strict';
const Hapi = require('hapi');
const models = require('./models');
const routes = require('./config/routes');

const validate = async (decode, request) => {
  if(!decode.email) {
    return { isValid: false };
  } else {
    const promise = new Promise((resolve, reject) => {
      models.user.findOne({
        where: { email: decode.email }
      }).then((userData) => {
        userData.getSession({ raw: true }).then((sessionData) => {
          if (sessionData.length === 0) resolve({ isValid: false });
          sessionData.forEach((session, index, array) => {
            if (session.authToken === request.headers.authorization) resolve( { isValid: true } );
            if (array.length === index + 1) resolve( { isValid: false } );
          });
        }).catch((err) => {
          reject({ message: 'error in authorizing token', error: err });
        });
      });
    });
    return promise    
  }
}

const server = Hapi.server({
	host: 'localhost',
  port: 3001
});

const init = async () => {
  // include our module here ↓↓
  await server.register(require('hapi-auth-jwt2'));

  server.auth.strategy('jwt', 'jwt', {
    key: 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc', // Never Share your secret key
    validate: validate,            // validate function defined above
    verifyOptions: { algorithms: ['HS256'] } // pick a strong algorithm
  });

  server.auth.default('jwt');

  server.route(routes);
  await server.start();
  console.log('Server running at ' + server.info.uri);
  return server;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;