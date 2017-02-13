var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/closd');
//import schemas
var schemas = require('./todos/models');
// export models
var User = mongoose.model('user', schemas.user);
var Todo = mongoose.model('todo', schemas.todo);
var Message = mongoose.model('message', schemas.message);
var UserMessage = mongoose.model('user_message', schemas.userMessage);

module.exports = {
  User: User,
  Todo: Todo,
  Message: Message,
  UserMessage: UserMessage
};
