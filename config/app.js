'use strict';

var config = require('./config'),
  express = require('./lib/express');

module.exports.start = function start() {
  var app = express.init();
  app.listen(config.port, function () {
    console.log('--');
    console.log('Environment:\t\t\t' + process.env.NODE_ENV);
    console.log('Port:\t\t\t\t' + config.port);
    console.log('--');
  });
};
