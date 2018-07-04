/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
    (function() {
        /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
        describe('RSS Feeds', function() {
            'use strict';
            /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? - If empty array, test failure. Expected 0 not to be 0.
         */
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
            it('have a URL key defined and the URL value is not empty', function() {
                // Loop through each feed of allFeeds and check that it has url key
                allFeeds.forEach(feed => expect(feed.url).toBeDefined());
                // Check that each allFeed.feed.url has a value by having length > 0
                allFeeds.forEach(feed => expect(feed.url.length).not.toBe(0));
            });

            /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
            it('have a name key defined and the name value is not empty', function() {
                // Loop through each feed of allFeeds and check that it has a name key
                allFeeds.forEach(feed => expect(feed.name).toBeDefined());
                // Check that each feed name key has a value by having length > 0
                allFeeds.forEach(feed => expect(feed.name.length).not.toBe(0));
            });
        });

        /* TODO: Write a new test suite named "The menu" */
        describe('The menu', function() {
            'use strict';

            // body of document
            const getBody = $('body');
            // menu icon class
            const menuIcon = $('.menu-icon-link');

            /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
            it('has menu hidden by default', function() {
                // Get class attribute of body and check that it contains menu-hidden class
                // I used vanilla javascript but realized it was easier with the included jquery would be easier
                // Vanilla javascript: expect(getBody.getAttribute('class')).toContain('menu-hidden');

                // expect body to have menu-hidden class to be true
                expect(getBody.hasClass('menu-hidden')).toBe(true);
            });

            /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
            // Testing toggle when clicked
            // removes menu-hidden class when clicked and adds menu-hidden when clicked again
            // Used trigger method http://api.jquery.com/trigger/ to similate click
            it('toggles menu-hidden class when clicked', function() {
                // trigger click
                menuIcon.trigger('click');
                // check if class menu-hidden is removed
                expect(getBody.hasClass('menu-hidden')).toBe(false);
                // trigger click
                menuIcon.trigger('click');
                // check if class menu-hidden is added
                expect(getBody.hasClass('menu-hidden')).toBe(true);
            });
        });

        /* TODO: Write a new test suite named "Initial Entries" */
        describe('Initial Entries', function() {
            /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
            // Before each load the initial entries which has index id of 0
            // As per Jasmine docs, beforeEach takes in done and done is called async work is complete
            beforeEach(function(done) {
                // Call loadFeed() is called and loads 'Initial Entries'
                loadFeed(0);
                // Async work is complete
                done();
            });
            it('have at least a single entry in the feed', function() {
                // Jquery get parent child: entry of feed
                const parentChild = $('div.feed article.entry');
                expect(parentChild.length).not.toBeLessThan(1);
            });
        });
        /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    })()
);
