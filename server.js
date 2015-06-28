var express = require('express')

var app = express();
var path = require('path');

//DATABASE SETUP
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/subredditor')
var db = mongoose.connection;

// CONFIG FOR FILES AND PORT
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.set('port', process.env.PORT || 3000);

//DATABASE ACTIONS

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("We are connected")
})

//ROUTES
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// PORT INITIALISATION

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;