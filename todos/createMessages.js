var db = require('../db.js');

var M = db.Message;
var UM = db.UserMessage;

M.create({
    content: '2nd message from 1 to 2',
    sender_id: 1,
    recipient_id: 2
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
    UM.create({
        message_id: m1._id,
        user_id: 2
    });
});

M.create({
    content: 'message from 2 to 1',
    sender_id: 2,
    recipient_id: 1
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 2
    });
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
});

M.create({
    content: '3rd message from 1 to 2',
    sender_id: 1,
    recipient_id: 2
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
    UM.create({
        message_id: m1._id,
        user_id: 2
    });
});

M.create({
    content: '2nd message from 2 to 1',
    sender_id: 2,
    recipient_id: 1
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 2
    });
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
});


M.create({
    content: 'message from 1 to 3',
    sender_id: 1,
    recipient_id: 3
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
    UM.create({
        message_id: m1._id,
        user_id: 3
    });
});

M.create({
    content: 'message from 3 to 1',
    sender_id: 3,
    recipient_id: 1
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 3
    });
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
});

M.create({
    content: '2nd message from 1 to 3',
    sender_id: 1,
    recipient_id: 3
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
    UM.create({
        message_id: m1._id,
        user_id: 3
    });
});

M.create({
    content: '2nd message from 3 to 1',
    sender_id: 3,
    recipient_id: 1
}, function(err, m1) {
    UM.create({
        message_id: m1._id,
        user_id: 3
    });
    UM.create({
        message_id: m1._id,
        user_id: 1
    });
});
