var db = require('../db');
var router = require('../lib/objectrouter');
var controller = require('./controller')(db);
var path = require('path');
var multer = require('multer');
var upload = multer({
  dest: path.join(__dirname, '..', 'src', 'img')
});

router.ObjectRoute('/todos', controller.todos);
router.ObjectRoute('/users', controller.users);
router.post('/users/savePicture', upload.single('picture'), controller.users.savePicture);
router.get('/users/getUserByLogin/:login', controller.users.getUserByLogin);

module.exports = router;
