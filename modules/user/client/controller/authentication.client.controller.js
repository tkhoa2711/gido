(function () {
  'use strict';

  angular
    .module('user')
    .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$http', '$state', 'Authentication'];
  
  function AuthenticationController($http, $state, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    vm.credentials = {};
    vm.error = ''; // TODO what is the correct default value
    vm.signup = signup;
    vm.login = login;

    ////////////

    function signup() {
      console.log('Go!!!');
      $http.post('/api/auth/signup', vm.credentials)
        .then(function (response) {
          // if successful we assign the response to the global user model
          console.log(response.data);
          vm.authentication.user = response.data;

          // TODO return to previous state
          $state.go('home');
        })
        .catch(function (response) {
          vm.error = response.data.message;
        });
    }

    function login() {
      $http.post('/api/auth/login', vm.credentials)
        .then(function (response) {
          // if successful we assign the response to the global user model
          vm.authentication.user = response.data;
          
          // TODO redirect to previous page
          $state.go('home');
        })
        .catch(function (response) {
          vm.error = response.data.message;
        });
    }
  }
})();
