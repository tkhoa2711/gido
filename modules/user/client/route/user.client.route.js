(function () {
  'use strict';

  angular
    .module('user')
    .config(clientRoute);
  
  clientRoute.$inject = ['$stateProvider'];

  function clientRoute($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'modules/user/client/view/signup.client.view.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'modules/user/client/view/login.client.view.html'
      });
  }
})();
