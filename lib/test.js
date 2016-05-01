var assert = require('assert');
var ViewSet = require('./viewset');

var item = function(id) {
  this.id = id;
  this.toJSON = () => this;
};

var fakeDB = function() {
  this.model = {
    items: [new item(1), new item(2), new item(3)]
  },

  this.find = function(query, callback) {
    callback(null, this.model.items);
  };

  this.findOne = function(query, callback) {
    callback(null, this.model.items[0]);
  };
};

describe('ViewSet', function() {
  describe('List', function() {
    it('returns a list', function(done) {
      var db = new fakeDB();
      var ctrl = new ViewSet(db);
      var req = {};
      var res = {
        json: function(data) {
          assert.equal(db.model.items, data, 'returns all items');
          done();
        }
      }
      ctrl.list(req, res);
    });
  });

  describe('Retrieve', function() {
    it('returns an item', function(done) {
      var db = new fakeDB();
      var ctrl = new ViewSet(db);
      var req = {
        params: {}
      };
      var res = {
        json: function(data) {
          assert.equal(db.model.items[0], data, 'returns one item');
          done();
        }
      };
      ctrl.retrieve(req, res);
    });
  })
});
