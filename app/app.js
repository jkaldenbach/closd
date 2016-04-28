import angular from 'angular';
import uirouter from 'angular-ui-router';
import nganimate from 'angular-animate';
import ngsanitize from 'angular-sanitize';
import ionicGlobal from '../app/ionic/js/ionic.min.js';
import ionicModule from '../app/ionic/js/ionic-angular.min.js';

// config
import router from './router';
// serices
import UserService from './services/User';
// directives
// controllers
import LoginController from './areas/login/login';
import HomeController from './areas/home/home';

angular.module('closdApp', [uirouter, nganimate, ngsanitize, 'ionic'])
  .config(router)
  .service('UserService', UserService)
  .controller('LoginController', LoginController)
  .controller('HomeController', HomeController);

angular.bootstrap(document, ['closdApp']);
