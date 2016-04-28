routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routes(stateProvider, routerProvider) {
  routerProvider.otherwise('/');
  stateProvider.state('login', {
    url: '/login',
    template: require('./areas/login/login.html'),
    controller: 'LoginController',
    controllerAs: 'vm'
  });
}
