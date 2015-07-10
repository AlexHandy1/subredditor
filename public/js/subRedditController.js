subredditor.controller('SubRedditController',['$http','Search', 'GetSearchTerms', function($http,Search,GetSearchTerms) {
  var self = this;


  self.errors = false

  GetSearchTerms.success(function(data) {
    self.searchHistory = []
    self.searchTrends = []
    var counts = {}
    for (x = 0; x < 5; x++) {
      if (data[x] != "") {
        self.searchHistory.push(data[data.length-x])
        console.log(self.searchHistory)
      }
    };
    data.forEach(function(x)
      {counts[x.searchTerm] = (counts[x.searchTerm] || 0)+1
    })
    var sortedTerms = Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]})
    self.searchTrends = sortedTerms.slice(0,5)
  }).error(function(data, status){
    // console.log(data, status);
        self.searchHistory = [];
  });

  this.runSearch = function() {
   Search.query(self.searchTerm)
    .then(function(response) {
      self.image = ''
      self.subReddits = response.data.data.children
      self.errors = false
        self.subReddits.forEach(function(subreddit) {
        if (subreddit.data.thumbnail == "self" || subreddit.data.thumbnail == "default" || subreddit.data.thumbnail == "") {
          subreddit.image = 'img/reddit-logo.png'
        } else {
          subreddit.image = subreddit.data.thumbnail
        }
      })
    },
    function(data) {
      self.errors = true
    });
    $http.post('/searchterms', {searchTerm: self.searchTerm}).
      success(function(data, status, headers, config) {
       // not posting through anything but it is connected to database, so about passing the right data here
      }).
      error(function(data, status, headers, config) {
        console.log("failed")
      console.log(data)
    });
      //try and get autoupload
      GetSearchTerms.success(function(data) {
        self.searchHistory = []
        for (x = 0; x < 10; x++) {
          if (data[x] != "") {
            self.searchHistory.push(data[data.length-x])
          }
        };
      }).error(function(data, status){
        console.log(data, status);
            self.searchHistory = [];
      });
   };
}])