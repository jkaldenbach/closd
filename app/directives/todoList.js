export default function TodoList() {
  return {
    restrict: 'E',
    bindToController: {
      todos: '=',
      createAction: '=',
      saveAction: '='
    },
    template: require('./todoList.html'),
    controller: TodoListController,
    controllerAs: 'todoVM'
  };
}

export function TodoListController() {
  var todoVM = this;
  todoVM.filter = 'all'

  todoVM.setFilter = function(filter) {
    todoVM.filter = filter;
  };

  todoVM.filterFn = {
    all: function() {
      return true;
    },
    complete: function(todo) {
      return todo.isComplete;
    },
    incomplete: function(todo) {
      return !todo.isComplete;
    }
  };

  todoVM.getIconClass = function(todo) {
    var iconClass = '';
    if (todo.isComplete) iconClass = 'ion-checkmark-circled';
    else iconClass = 'ion-ios-circle-outline';
    return iconClass;
  };

  todoVM.complete = function(todo) {
    todo.isComplete = !todo.isComplete;
    todoVM.saveAction(todo);
  };

  todoVM.editTodo = function(todo) {
    todo.editing = true;
  };

  todoVM.doneEditing = function(todo) {
    delete todo.editing;
    todoVM.saveAction(todo);
  }
}
