var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 8001;
// start server on specific port
app.listen(port, function() {
    console.log('%s listening at %s server');
});