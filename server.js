var express = require('express');
var app = express();

// configure a public directory to host static content
app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;

app.listen(port);