var express = require('express');
var app = express();

app.get('/cheer.txt', function(req, res){
  res.send('You rock!');
});

app.get('/jeer.txt', function(req,res){
   res.send('You suck!');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});