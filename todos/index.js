var router = require('express').Router();
var db = require('../db');
var controller = require('./controller')(db);

router.route('/')
  .get(controller.list)
  .post(controller.create);
// router.route('/:id')
//   .get(controller.retrieve)
//   .put(controller.update)
//   .delete(controller.destroy);

module.exports = router;
