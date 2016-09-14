process.title = 'MyWebServer';

var args = process.argv;
var port = args[2] || 7070;
var express = require('express');
var app = express();
var consign = require('consign');

app.use(express.static(__dirname + "/static"));

consign()
.include("routes")
.into(app);


app.listen(port, function() {
  console.log('Startup on ' + port);
});
