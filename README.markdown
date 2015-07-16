Summary
=================

* Single page Subreddit search application (SubRedditor) using Angular JS and Reddit API to pull in latest subreddit topics on a given search - based on my interest for consolidating and surfacing trending content

* Supported by a full JS back-end with a Node Express Server and MongoDB database that stores user search terms and allows the latest and most popular to be displayed on the front-end.

* I followed Agile and TDD methodologies - created user stories to develop my MVP and created a waffle.io board to manage tickets >> [Waffle](https://waffle.io/AlexHandy1/subredditor).

* To view simply click on the heroku link [SubRedditor Web](https://subredditor.herokuapp.com/). Detailed instructions for local installation below.

* Challenges and proposed improvements - I would like to make the search more dynamic based on data collected from users e.g. can directly click on a popular search term and get to results

![SubRedditor - Example Search](https://github.com/AlexHandy1/subredditor/blob/master/public/img/SubRedditor.png)

Use Cases:
-------

```
- [x] As a User,
      So that I can stay on top of the latest trends,
      I want to be able to search for the latest articles in my favourite subreddits

- [x] As an Admin,
      So that I can understand what people are searching for,
      I want to be able to store user searches in a database

- [x] As a User,
      So that I can see what people have searched for,
      I want to be able to see a list of the most recent 5 searches

- [x] As a User,
      So that I can see what the most popular searches are,
      I want to be able to see a list of the top 5 most popular searches

- [x] As a User,
      So that I understand why I don't get results for certain searches,
      I want to see an informative error message

- [x] As a User,
      So that I can search through the most recent subreddit articles,
      I want to be able to conduct a simple text search from the results list

```

How to run
----

### Local Installation

After you have downloaded or locally installed Node.js and MongoDB (set-up a database called subreddit, if using 'mongo' interface in command line you can just run 'use subreddit') to view in local web browser (localhost 3000) and run tests follow the below commands in the command-line

```
git clone https://github.com/AlexHandy1/subredditor
cd subredditor
npm install
mongod
npm start
webdriver-manager start (in new command-line tab)
protractor test/e2e/conf.js (in new command-line tab)
```

Technologies used
----

* Production - AngularJS, Javascript, CSS (using Bootstrap), HTML, Node, ExpressJS, MongoDB, Mongoose
* Testing - Protractor, Selenium

Further Improvements
----

*  Dynamic search e.g. user can directly click on a popular search term and to get results

*  Improved test coverage e.g. address asychronicity issue

*  Add more filters and search options for search results e.g. sorting by amount of comments, upvotes etc