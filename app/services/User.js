UserService.$inject = ['$http', '$q'];
export default function UserService($http, $q) {
  var data = {};

  this.login = function(login) {
    return $http.get('./api/users/getUserByLogin/' + login)
      .then(function(resp) {
        data.user = resp.data;
        return resp.data;
      });
  };

  this.getUser = function(loginName) {
    var deferred = $q.defer();
    if (data.user) deferred.resolve(data.user);
    else deferred.resolve(this.login(loginName));
    return deferred.promise;
  };
}
