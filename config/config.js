'use strict';

var _ = require('lodash'),
  path = require('path'),
  glob = require('glob');

function getGlobbedPaths(globPatterns, excludes) {
  // regex that matches URL paths
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // the resulting output
  var output = [];

  if (_.isArray(globPatterns)) {
    // if a list of globs is provided, process each of them one by one
    globPatterns.forEach(function (globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      // this is meant to support external CDN assets
      output.push(globPatterns);
    } else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function (file) {
          if (_.isArray(excludes)) {
            for (var i in excludes) {
              file = file.replace(excludes[i], '');
            }
          } else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }

      output = _.union(output, files);
    }
  }

  return output;
}

/**
 * Initialize global config folders
 */
function initGlobalConfigFolders(config, assets) {
  config.folders = {
    server: {},
    client: {}
  };

  // glob all client folders, excluding the root directory
  // NOTE: the exclude regex allows it to work on Windows
  config.folders.client = getGlobbedPaths(
    path.join(process.cwd(), 'modules/*/client/'),
    process.cwd().replace(new RegExp(/\\/g), '/'));
}

/**
 * Initialize global configuration files
 */
var initGlobalConfigFiles = function (config, assets) {
  config.files = {
    server: {},
    client: {}
  };

  // glob routing files
  config.files.server.routes = getGlobbedPaths(assets.server.routes);

  // glob data models
  config.files.server.models = getGlobbedPaths(assets.server.models);

  // glob all configurations
  config.files.server.configs = getGlobbedPaths(assets.server.config);
};

/**
 * Initialize global configuration
 */
var initGlobalConfig = function () {
  // get all assets
  var defaultAssets = require(path.join(process.cwd(), 'config/asset/default'));
  var assets = defaultAssets;

  // get all configs
  var defaultConfig = require(path.join(process.cwd(), 'config/env/default'));
  var envConfig = require(path.join(process.cwd(), 'config/env', process.env.NODE_ENV));
  var config = _.merge(defaultConfig, envConfig);

  // glob all the config files and folders, excluding assets
  initGlobalConfigFolders(config, assets);
  initGlobalConfigFiles(config, assets);

  // expose utility functions
  config.util = {
    getGlobbedPaths: getGlobbedPaths
  };

  return config;
};

/**
 * Create configuration object
 */
module.exports = initGlobalConfig();
