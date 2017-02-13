var Schema = require('mongoose').Schema;

var user = new Schema({
  name: {
    first: { type:String, require: true },
    last: String
  },
  loginName: String,
  picture: String
});

user.virtual('name.full').get(function () {
  return [this.name.first, this.name.last].join(' ');
});

var todo = new Schema({
  title: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

var message = new Schema({
  content: String,
  sender_id: Number,
  recipient_id: Number
});

var userMessage = new Schema({
  status: String,
  message_id: Schema.Types.ObjectId,
  user_id: Number
});

module.exports = {
  user: user,
  todo: todo,
  message: message,
  userMessage: userMessage
};
