ListController.$inject = ['UserService', 'TodoService'];
export default function ListController(User, Todo) {
  var vm = this;

  User.getUser().then(function(user) {
    vm.user = user;
  }).then(Todo.getAllTodos).then(function(todos) {
    vm.todos = todos;
  });

  vm.newTodo = function(title) {
    var newTodo = {
      title: title,
      _user: vm.user._id,
      isComplete: false
    };
    Todo.create(newTodo);
    vm.todos.unshift(newTodo);
  };

  vm.toggleComplete = function(todo) {
    todo.isComplete = !todo.isComplete;
    Todo.save(todo);
  };
}
