describe('SubRedditor', function() {

   beforeEach(function(){
      browser.get('http://localhost:3000');
   });
   var searchButton = element(by.id('searchButton'))
   var searchField = element(by.model('SRCtrl.searchTerm'))

   //test that a table exists before search

   it('has a table loaded prior to search', function(){
      expect($('table').isPresent()).toBeTruthy();
   });

   it('has a fully populated table after a search is conducted', function() {
      var table = element.all(by.repeater('subreddit in SRCtrl.cohort'));
      searchField.sendKeys('Bitcoin');
      searchButton.click();
      expect($$('table tr').count()).toBe(26)
   });

   it('displays an error message if there is no subreddit for that search', function() {
      searchField.sendKeys('aa');
      searchButton.click();
      expect(element(by.id('error')).getText()).toContain('Sorry, there are no subreddits matching that search');
   })

   it('shows users a list of recently searched items', function() {
      searchField.sendKeys('Bitcoin');
      searchButton.click();
      searchField.sendKeys('Ferrari')
      searchButton.click();
      expect(element(by.id('searchTerms')).getText()).toContain('| Bitcoin | Ferrari |' );
   })

   it('enables users to conduct a simple text search on results', function() {
      var textSearchButton = element(by.id('textSearch'))
      var textSearchField = element(by.model('SRCtrl.searchTerm'))
      searchField.sendKeys('Bitcoin');
      searchButton.click();
      textSearchField.sendKeys('Bit');
      textSearchButton.click();
      //how test output if it is dynamic and you don't know what output might be

   });

   it('enables users to filter the top 10 search results with a checkbox', function() {

   });
});