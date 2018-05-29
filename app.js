'use strict';
const Hapi = require('hapi');
const routes = require('./config/routes');

const validate = async (decode, request) => {
  if(!decode.email) {
    console.log('isValid: false',);
    return { isValid: false };
  } else {
    console.log('isValid: true',);
    return { isValid: true };
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