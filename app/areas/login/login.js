LoginController.$inject = ['$state', 'UserService'];
export default function LoginController($state, Users) {
  var vm = this;

  vm.login = function(loginName) {
    Users.login(loginName)
      .then(function(resp) {
        if (resp) $state.go('home');
        else vm.alert = 'User not found!';
      });
  };

  vm.clearAlert = function() {
    vm.alert = '';
  };
}
