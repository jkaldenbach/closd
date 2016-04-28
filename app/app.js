import angular from 'angular';
import uirouter from 'angular-ui-router';

// config
import router from './router';
// serices
import UserService from './services/User';
// directives
// controllers
import LoginController from './areas/login/login';

angular.module('closdApp', [uirouter])
  .config(router)
  .service('UserService', UserService)
  .controller('LoginController', LoginController);

angular.bootstrap(document, ['closdApp']);
