export default function TodoList() {
  return {
    restrict: 'E',
    bindToController: {
      todos: '=',
      createAction: '=',
      completeAction: '='
    },
    template: require('./todoList.html'),
    controller: TodoListController,
    controllerAs: 'todoVM'
  };
}

function TodoListController() {
  var todoVM = this;

  todoVM.getIconClass = function(todo) {
    var iconClass = '';
    if (todo.isComplete) iconClass = 'ion-checkmark-circled';
    else iconClass = 'ion-ios-circle-outline';
    return iconClass;
  };
}
