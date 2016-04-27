var ViewSet = require('../lib/viewset');

module.exports = function(db) {
  return {
    todos: new ViewSet(db.Todo),
    users: new ViewSet(db.User)
  };
};
