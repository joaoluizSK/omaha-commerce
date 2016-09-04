process.title = 'MyWebServer';
var args = process.argv;
var port = args[2] || 7070;
var webServer = require('./server');

var express = require('express');

var app = express();

app.get('/teste', function(req, res) {
  res.json({status:"ok"});
});

webServer.listen(port, function() {
  console.log('Startup on ' + port);
});
