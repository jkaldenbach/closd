var Schema = require('mongoose').Schema;

var user = new Schema({
  name: {
    first: { type:String, require: true },
    last: String
  },
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

module.exports = {
  user: user,
  todo: todo
};
