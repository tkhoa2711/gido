'use strict';

module.exports = {
  client: {
    lib: {
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
      ]
    },
    js: [
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ]
  },
  server: {
    routes: ['modules/*/server/route/**/*.js']
  }
};
