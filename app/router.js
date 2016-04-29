routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routes(stateProvider, routerProvider) {
  routerProvider.otherwise('/');
  stateProvider.state('login', {
    url: '/login',
    template: require('./areas/login/login.html'),
    controller: 'LoginController',
    controllerAs: 'vm'
  })
  .state('home', {
    url: '',
    abstract: 'true',
    template: require('./areas/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'vm'
  })
  .state('home.list', {
    url: '/list',
    views: {
      'tab-list': {
        template: require('./areas/list/list.html'),
        controller: 'ListController',
        controllerAs: 'vm'
      }
    }
  })
  .state('home.account', {
    url: '/account',
    views: {
      'tab-account': {
        template: require('./areas/account/account.html'),
        controller: 'AccountController',
        controllerAs: 'vm'
      }
    }
  });
}
