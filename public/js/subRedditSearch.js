subredditor.factory('Search', ['$http', function($http) {
  var queryURLfront = "https://www.reddit.com/r/"
  var queryURLback = "/new.json?sort=new"

  return {
    query: function(searchTerm) {
      return $http({
        url: queryURLfront + searchTerm + queryURLback,
        method: 'GET'
      });
    }
  }
}]);