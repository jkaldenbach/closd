ListController.$inject = ['$scope', 'UserService', 'TodoService'];
export default function ListController($scope, User, Todo) {
  var vm = this;

  $scope.$on('$ionicView.enter', function() {
    User.getUser().then(function(user) {
      vm.user = user;
    }).then(Todo.getAllTodos).then(function(todos) {
      vm.todos = todos;
    });
  });

  vm.newTodo = function(title) {
    var newTodo = {
      title: title,
      _user: vm.user._id,
      isComplete: false
    };
    Todo.create(newTodo).then(function(newTodo) {
      vm.todos.unshift(newTodo);
    });
  };

  vm.save = function(todo) {
    Todo.save(todo);
  };
}
