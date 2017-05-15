'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  path = require('path');

/**
 * Initialize middleware for Express app
 */
module.exports.initMiddleware = function (app) {
  switch (process.env.NODE_ENV) {
  case 'development':
    app.use(morgan('dev'));
    break;
  case 'production':
    // TODO should log to a file instead of stdout
    app.use(morgan('common'));
    break;
  };

  // for parsing application/x-www-form-urlencoded and application/json
  // NOTE: the body parsing middleware should be placed before methodOverride
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // support for overriding HTTP method such as DELETE and PUT based on X-HTTP-Method-Override header
  app.use(methodOverride());

  // for parsing cookie
  app.use(cookieParser());
};

/**
 * Configure view engine
 */
module.exports.initViewEngine = function (app) {
  // set view path
  app.set('views', './');
};

/**
 * Configure routing to serve static files
 */
module.exports.initModulesClientRoutes = function (app) {
  // serve client-side libraries
  app.use('/', express.static(path.resolve('./public')));

  // serve client-side application code
  // TODO refactor this with globbbing
  ['/modules/core/client/'].forEach(function (staticPath) {
    app.use(staticPath, express.static(path.resolve('./' + staticPath)));
  });
};

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
  this.initMiddleware(app);
  this.initViewEngine(app);
  this.initModulesClientRoutes(app);
  this.initModulesServerRoutes(app);
  return app;
};
