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
            /* What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? - If empty array, test failure. Expected 0 not to be 0.
         */
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            /* Loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
            it('have a URL key defined and the URL value is not empty', function() {
                // Loop through each feed of allFeeds and check that it has url key
                allFeeds.forEach(feed => expect(feed.url).toBeDefined());
                // Check that each allFeed.feed.url has a value by having length > 0
                allFeeds.forEach(feed => expect(feed.url.length).not.toBe(0));
            });

            /* Loop through each feed in the allFeeds object and ensures it 
         * has a name defined and that the name is not empty.
         */
            it('have a name key defined and the name value is not empty', function() {
                // Loop through each feed of allFeeds and check that it has a name key
                allFeeds.forEach(feed => expect(feed.name).toBeDefined());
                // Check that each feed name key has a value by having length > 0
                allFeeds.forEach(feed => expect(feed.name.length).not.toBe(0));
            });
        });

        /* New test suite named "The menu" */
        describe('The menu', function() {
            'use strict';

            // Body of document
            const getBody = $('body');
            // menu icon class
            const menuIcon = $('.menu-icon-link');

            // Test if menu is hidden by default
            it('has menu hidden by default', function() {
                /* Get class attribute of body and check that it contains menu-hidden class
                * I used vanilla javascript but realized it was easier with the included jquery.
                * Vanilla javascript: expect(getBody.getAttribute('class')).toContain('menu-hidden');
                */
                // expect body to have menu-hidden class to be true
                expect(getBody.hasClass('menu-hidden')).toBe(true);
            });

            /* Testing toggle when clicked
            * removes menu-hidden class when clicked and adds menu-hidden when clicked again
            * Used trigger method http://api.jquery.com/trigger/ to similate click
            */
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

        /* New test suite named "Initial Entries" */
        describe('Initial Entries', function() {
            'use strict';

            /* Before each, load the initial entries which has index id of 0
            *  As per Jasmine docs and section 3 lesson 22 part 18, beforeEach takes in done
            *  and done is called when async work is complete
            */
            beforeEach(function(done) {
                // Call loadFeed() is called and loads 'Initial Entries' index of 0
                // done use as callback for loadFeed(id,cb)
                loadFeed(0, function() {
                    done();
                });
            });

            // Check for at least a single .entry element in .feed container
            it('have at least a single entry in the feed', function(done) {
                // Jquery set parent child
                const feedContainer = $('.feed');
                const feedEntry = $('.entry');
                // Find the child .entry and make sure it is greater than 0
                // console.log(feedContainer.find(feedEntry));
                expect(feedContainer.find(feedEntry).length).toBeGreaterThan(0);
                done();
            });
        });

        /* Test suite named "New Feed Selection" */
        describe('New Feed Selection', function() {
            'use strict';

            let firstHTML, secondHTML;
            /* Logic: From app.js line 56, 'var container = $('.feed')'.
            *  We can loop through each title $('.header-title') and compare them or just compare
            *  the container $('.feed'). Easier to compare the html as a whole, once feeds are loaded
            *  using asynchronous test.
            */

            // Before each, gather html to compare. Use done() as call back
            // before it proceeds to tests.
            beforeEach(function(done) {
                // First feed loaded by default so just stored HTML
                firstHTML = $('.feed').html();
                // Loaded 2nd feed and stored HTML into variable
                loadFeed(1, function() {
                    secondHTML = $('.feed').html();
                    // Finished gathering data needed to continue on to test
                    done();
                });
            });

            // Made sure it Reset the feed to default first feed (0) for user
            afterEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });

            // Compared both HTML to make sure they are not the same
            it('should not be the same', function() {
                // console.log(firstHTML);
                // console.log(secondHTML);
                // Console logged the first and second feed's HTML to make sure it
                // showed different HTML worked properly before writing test.
                expect(firstHTML).not.toBe(secondHTML);
            });
        });
    })()
);
