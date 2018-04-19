var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen( port );

console.log("Listening on port: " + port);