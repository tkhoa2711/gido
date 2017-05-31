'use strict';

/**
 * The root Angular app is here!
 */
var app = angular.module('application', [
  'core.route',
  'user'
]);

app.config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
