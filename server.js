var express = require('express')

var app = express();
var path = require('path');
var bodyParser = require('body-parser')

//DATABASE SETUP
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/subreddit')
var db = mongoose.connection;

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

  var searchSchema = mongoose.Schema(
    {
      searchTerm: String,
    })

  var searchHistory = mongoose.model('searchHistory', searchSchema)

  var test = [{searchTerm: "Test"}]

  // searchHistory.collection.insert(test, onInsert)
  //this means it is stored as db.searchhistories.find

   //  function onInsert(err, docs) {
   //    if (err) {
   //      console.log('your mother');
   //    } else {
   //      console.info('%d searchTerms were successfully stored. Go you.', docs.length);
   //    }
   // }

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