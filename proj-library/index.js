process.title = 'omaha-server';

var args = process.argv;
var port = args[2] || 7070;
var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static(__dirname + "/static"));

consign()
    .include("db.js")
    .then("lib/boot.js")
    .then("model")
    .then("routes")
    .into(app);

app.listen(port, function() {
    console.log('Startup on ' + port);
});
