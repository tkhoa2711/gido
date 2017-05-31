(function () {
  'use strict';

  angular
    .module('user')
    .config(clientRoute);
  
  clientRoute.$inject = ['$stateProvider'];

  function clientRoute($stateProvider) {
    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'modules/user/client/view/signin.client.view.html'
      });
  }
})();
