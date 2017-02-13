var db = require('../db');

db.User.aggregate([
  { $match: { fake_id: 1 }},
  { $lookup: {
    from: 'messages',
    localField: 'fake_id',
    foreignField: 'sender_id',
    as: 'sentMessages'
  } },
  { $lookup: {
    from: 'messages',
    localField: 'fake_id',
    foreignField: 'recipient_id',
    as: 'receivedMessages'
  } },
  { $unwind: 'sentMessages' },
  { $unwind: 'receivedMessages' },
], function(err, results) {
  console.log(err, results);
  throw;
})
