var ViewSet = require('../lib/viewset');

module.exports = function(db) {
  var TodoViewSet = new ViewSet(db.Todo);

  var UserViewSet = new ViewSet(db.User);
  UserViewSet.savePicture = function(req, res, next) {
    console.log(req.file, req.body);
    db.User.update({_id: req.body.id}, {$set: {picture: req.file.filename}},
    function(err, user) {
      res.send(200);
    });
  };
  UserViewSet.getUserByLogin = function(req, res, next) {
    var login = req.params.login;
    db.User.findOne({loginName: login}, function(err, user) {
      if (err) next(err);
      else if (!user) res.status(404).send('not found');
      else res.json(user.toJSON({virtuals: true}));
    });
  };

  return {
    todos: TodoViewSet,
    users: UserViewSet
  };
};
