describe('SubRedditor', function() {

   beforeEach(function(){
      browser.get('http://localhost:3000');
   });

   //test that a table exists before search

   it('has a table loaded prior to search', function(){
      expect($('table').isPresent()).toBeTruthy();
   })

   //test that after a search it is populated

   //test that has a link that goes to external website
});