'use strict';

var passport = require('passport'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  User = require('mongoose').model('User');

module.exports = function (app) {
  // serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // deserialize sessions
  passport.deserializeUser(function (id, done) {
    User.findOne({
      _id: id
    }, '-salt -password', function (err, user) {
      done(err, user);
    });
  });

  // initialize passport strategies
  config.util.getGlobbedPaths(path.join(__dirname, './*.strategy.js')).forEach(function (pathname) {
    require(path.resolve(pathname))();
  });

  // add passport's middleware
  app.use(passport.initialize());
  app.use(passport.session());
};
