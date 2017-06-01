'use strict';

var config = require('../config'),
  path = require('path'),
  mongoose = require('mongoose');

/**
 * Load Mongoose's models
 */
module.exports.loadModels = function () {
  config.files.server.models.forEach(function (modelPath) {
    require(path.resolve(modelPath));
  });
};

/**
 * Instantiate database connection
 */
module.exports.connect = function () {
  var db = mongoose.connect(config.db.uri, config.db.options, function (err) {
    if (err) {
      console.error('Could not connect to DB: ' + err);
    }
  });
};
