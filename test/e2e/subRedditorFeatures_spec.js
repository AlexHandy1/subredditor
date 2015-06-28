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

   //test that has a link that goes to external website
});