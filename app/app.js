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
import TodoService from './services/Todo';
// directives
import TodoList from './directives/todoList';
// controllers
import LoginController from './areas/login/login';
import HomeController from './areas/home/home';
import ListController from './areas/list/list';
import AccountController from './areas/account/account';

angular.module('closdApp', [uirouter, nganimate, ngsanitize, 'ionic'])
  .config(router)
  .service('UserService', UserService)
  .service('TodoService', TodoService)
  .directive('todoList', TodoList)
  .controller('LoginController', LoginController)
  .controller('HomeController', HomeController)
  .controller('ListController', ListController)
  .controller('AccountController', AccountController);

angular.bootstrap(document, ['closdApp']);
