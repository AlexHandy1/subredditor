subredditor.factory('GetSearchTerms', ['$http', function($http) {
  var url = "/searchterms"
  return $http.get(url);
}])