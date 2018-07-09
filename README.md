# Project Overview

Write tests using [Jasmine](https://jasmine.github.io/) test suite to ensure proper functionality of a web-based feed reader (RSS feeds) application.

## How to run

Download by clicking the green clone or download button above or through the terminal by:
```
$ git clone https://github.com/rleu82/feed-reader-testing
```
Jasmine files are already included. Just load index.html to run tests. To add more tests, open the file feedreader.js by navigating to jasmine/spec/feedreader.js.

### To practice writing tests
You can download or clone original repository [Here](https://github.com/udacity/frontend-nanodegree-feedreader)
or by using your terminal:
```
$ git clone https://github.com/udacity/frontend-nanodegree-feedreader
```

Then compare your feedreader.js file with one from my project here: [feedreader.js](https://github.com/rleu82/feed-reader-testing/blob/master/jasmine/spec/feedreader.js)

### Helpful Resources
1. [Jasmine Introduction](https://jasmine.github.io/2.0/introduction)
2. [Jasmine Cheat Sheet](https://devhints.io/jasmine)

### Tests and Suites that were written included:

1. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
2. New test suite named `"The menu"`.
3. A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
4. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
5. New test suite named `"Initial Entries"`.
6. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
7. New test suite named `"New Feed Selection"`.
8. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

