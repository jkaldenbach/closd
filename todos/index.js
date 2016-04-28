var db = require('../db');
var router = require('../lib/objectrouter');
var controller = require('./controller')(db);

router.ObjectRoute('/todos', controller.todos);
router.ObjectRoute('/users', controller.users);
router.get('/users/getUserByLogin/:login', controller.users.getUserByLogin);

module.exports = router;
