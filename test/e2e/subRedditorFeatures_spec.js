describe('SubRedditor', function() {

   beforeEach(function(){
      browser.get('http://localhost:3000');
   });

   //test that a table exists before search

   it('has a table loaded prior to search', function(){
      expect($('table').isPresent()).toBeTruthy();
   });

   it('has a fully populated table after a search is conducted', function() {
      var searchButton = element(by.id('searchButton'))
      var searchField = element(by.model('SRCtrl.searchTerm'))
      var table = element.all(by.repeater('subreddit in SRCtrl.cohort'));
      searchField.sendKeys('Bitcoin');
      searchButton.click();
      expect($$('table tr').count()).toBe(26)
   });

   it('displays an error message if there is no subreddit for that search', function() {
      var searchButton = element(by.id('searchButton'))
      var searchField = element(by.model('SRCtrl.searchTerm'))

      searchField.sendKeys('aa');
      searchButton.click();
      expect(element(by.id('error')).getText()).toContain('Sorry, there are no subreddits matching that search');
   })

   it('shows users a list of recently searched items', function() {
      var searchButton = element(by.id('searchButton'))
      var searchField = element(by.model('SRCtrl.searchTerm'))
      searchField.sendKeys('Bitcoin');
      searchButton.click();
      searchField.sendKeys('Ferrari')
      searchButton.click();
      expect(element(by.id('searchTerms')).getText()).toContain('| Bitcoin | Ferrari |' );
   })
});