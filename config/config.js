'use strict';

var path = require('path');

/**
 * Initialize global configuration
 */
var initGlobalConfig = function () {
  var defaultConfig = require(path.join(process.cwd(), 'config/env/default'));
  var config = defaultConfig;
  return config;
};

/**
 * Create configuration object
 */
module.exports = initGlobalConfig();
