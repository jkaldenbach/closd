var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var todosRoutes = require('./todos/index');

// log all incoming requests
app.use(function(req, res, next) {
  var d = new Date();
  console.log(req.method, req.path, d.toUTCString());
  next();
});

app.set('view engine', 'html');

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('src'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/api', todosRoutes);

app.listen(3000);
