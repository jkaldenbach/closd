var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todos = require('./todos/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todos', todos);

app.listen(3000 || env.PORT);
