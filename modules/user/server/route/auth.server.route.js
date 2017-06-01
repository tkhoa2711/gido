'use strict';

var passport = require('passport');

module.exports = function (app) {
  // user routes
  var user = require('../controller/user.server.controller');

  // user authentication API
  app.route('/api/auth/signup').post(user.signup);
  app.route('/api/auth/login').post(user.login);
};
