module.exports = function(db) {
  var controller = {};

  controller.list = function(req, res, next) {
    db.Todo.find({}, function(err, todos) {
      if (err) next(err);
      if (!todos.length) res.status(404).send('no todos')
      res.json(todos);
    })
  };

  controller.create = function(req, res, next) {
    console.log(req.body);
    todo = new db.Todo(req.body);
    console.log(todo);
    todo.save(function(err, todo) {
      console.log(err, todo);
      if (err) next(err);
      res.json(true);
    });
  };

  return controller;
};
