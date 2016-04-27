var ViewSet = function(collection, listquery) {
  var collection = collection;
  var listquery = listquery || {};

  this.list = function(req, res, next) {
    collection.find(listquery, function(err, docs) {
      if (err) next(err);
      else if (!docs || !docs.length) res.status(404).send('not found');
      else res.json(docs);
    });
  };

  this.create = function(req, res, next) {
    var doc = new collection(req.body);
    doc.save(function(err, doc) {
      if (err) next(err);
      else res.json(true);
    });
  };

  this.retrieve = function(req, res, next) {
    var id = req.params.id;
    collection.findOne({_id: id}, function(err, doc) {
      if (err) next(err);
      else res.json(doc);
    });
  };

  this.update = function(req, res, next) {
    var id = req.params.id;
    if (id != req.body._id) res.status(500).send('invalid');
    else collection.findOneAndUpdate({_id: id}, function(err, doc) {
      if (err) next(err);
      else res.json(true);
    });
  };

  this.destroy = function(req, res, next) {
    var id = req.params.id;
    collection.findOneAndRemove({_id: id}, function(err, doc) {
      if (err) next(err);
      else res.json(true);
    });
  };
}

module.exports = ViewSet;
