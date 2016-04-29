AccountController.$inject = ['$state', 'UserService']
export default function AccountController($state, User) {
  var vm = this;
  User.getUser().then(function(user) {
    vm.user = user;
  });

  vm.saveUser = function(user) {
    User.save(user).then(function() {
      document.getElementById('picForm').submit();
    });
  };

  vm.uploadFinished = function() {
    console.log('uploadFinished');
    User.getUser(vm.user.loginName, true)
    .then(function() {
      $state.go('home.list');
    });
  };
}
