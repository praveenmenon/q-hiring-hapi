if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const abstractionRootUrl = "q-hiring-abstraction:3002";
} else {
  const abstractionRootUrl = "http://localhost:3002/";
}
module.exports = abstractionRootUrl;
