var router = require('express').Router();

router.ObjectRoute = function(route, viewset) {
  router.route(route)
    .get(viewset.list)
    .post(viewset.create);
  router.route(route + '/:id')
    .get(viewset.retrieve)
    .put(viewset.update)
    .delete(viewset.destroy);
};

module.exports = router;
