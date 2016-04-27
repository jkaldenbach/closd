var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todos = require('./todos/index');

// log all incoming requests
app.use(function(req, res, next) {
  var d = new Date();
  console.log(req.method, req.path, d.toUTCString());
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('www'))

app.use('/api', todos);

app.listen(3000);
