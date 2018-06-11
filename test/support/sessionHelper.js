const models = require("../../models");
const server = require("../../app.js");
const factory = require('factory-girl').factory;
const chai = require('chai');

const authenticateUser = {}

authenticateUser.signMeIn = (user) => {
  return server.inject({
    method: "POST",
    url: "/login",
    payload: {
      email: user.email,
      password: user.password
    }
  }).then(response => {
    return JSON.parse(response.payload)
  })
}

module.exports = authenticateUser;