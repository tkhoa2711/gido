'use strict';

var express = require('express'),
  path = require('path');

/**
 * Configure routing on the server side
 */
module.exports.initModulesServerRoutes = function (app) {
  // Obtain all routing files and initialize them
  // TODO refactor this with globbing
  ['modules/core/server/core.server.route.js'].forEach(function (_path) {
    var setup_config = require(path.resolve(_path));
    setup_config(app);
  });
};

/**
 * Initialize the Express application
 */
module.exports.init = function () {
  var app = express();
  this.initModulesServerRoutes(app);
  return app;
};
