var express = require('express')

var app = express();
var path = require('path');
var bodyParser = require('body-parser')

//DATABASE SETUP
var mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/subreddit'
mongoose.connect(MONGODB_URI)
var db = mongoose.connection;
var testRequests = require('test-requests');

// CONFIG FOR FILES AND PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.set('port', process.env.PORT || 3000);

//DATABASE ACTIONS

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("We are connected")

  // //ATTEMPT TO CLEAR TEST DATABASE
  // console.log(process.env)
  // testRequests.registerHandlers({
  //   clean_db: function(request, response, done) {
  //     db.init(done);
  //   }
  // });

  var searchSchema = mongoose.Schema(
    {
      searchTerm: String,
    })

  var searchHistory = mongoose.model('searchHistory', searchSchema)

   app.get('/searchterms', function(req, res, next) {
    searchHistory.find(function (err, searchterms) {
      if (err) return next(err);
      res.json(searchterms);
    });
  });

   app.post('/searchterms', function(req, res, next) {
    searchHistory.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
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