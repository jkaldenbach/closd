UserService.$inject = ['$http', '$q'];
export default function UserService($http, $q) {

  this.login = function(login) {
    return $http.get('./api/users/getUserByLogin/' + login)
      .then(function(resp) {
        localStorage.user = JSON.stringify(resp.data);
        return resp.data;
      });
  };

  this.getUser = function(loginName, forceUpdate) {
    var deferred = $q.defer();
    if (localStorage.user && !forceUpdate) deferred.resolve(JSON.parse(localStorage.user));
    else deferred.resolve(this.login(loginName));
    return deferred.promise;
  };

  this.save = function(user) {
    return $http.put('./api/users/' + user._id, user);
  }
}
