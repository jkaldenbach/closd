UserService.$inject = ['$http', '$q'];
export default function UserService($http, $q) {

  this.login = function(login) {
    return $http.get('./api/users/getUserByLogin/' + login)
      .then(function(resp) {
        localStorage.user = JSON.stringify(resp.data);
        return resp.data;
      });
  };

  this.getUser = function(loginName) {
    var deferred = $q.defer();
    if (localStorage.user) deferred.resolve(JSON.parse(localStorage.user));
    else deferred.resolve(this.login(loginName));
    return deferred.promise;
  };
}
