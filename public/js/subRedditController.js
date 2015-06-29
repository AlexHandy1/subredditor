subredditor.controller('SubRedditController',['Search',function(Search) {
  var self = this;

  self.errors = false

  this.runSearch = function() {
   Search.query(self.searchTerm)
    .then(function(response) {
      console.log(response.data.data.children)
      self.image = ''
      self.subReddits = response.data.data.children
      self.errors = false
      console.log(self.errors)
      console.log(self.subReddits.length)
        self.subReddits.forEach(function(subreddit) {
        // console.log(subreddit.data.thumbnail);
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
   };
}])