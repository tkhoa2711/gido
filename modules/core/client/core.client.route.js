(function () {
  'use strict';

  angular
    .module('core.route', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    // TODO redirect to custom 404 page if route not found

    // routing for home page
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/client/view/home.client.view.html'
      });
  }
})();
