TodoService.$inject = ['$http', '$q']
export default function TodoService($http, $q) {
  this.getAllTodos = function() {
    return $http.get('./api/todos').then(function(resp) {
      return resp.data;
    });
  };

  this.create = function(todo) {
    return $http.post('./api/todos', todo)
      .then(function(resp) {
        console.log(resp);
        return resp.data;
      });
  };

  this.save = function(todo) {
    return $http.put('./api/todos/' + todo._id, todo);
  };
 }
