(function () {
  'use strict';

  /**
   * Service for user authentication
   */
  angular
    .module('user')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$window'];

  function Authentication($window) {
    var auth = {
      user: $window.user
    };

    return auth;
  }
})();
