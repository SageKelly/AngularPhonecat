'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('phoneCatApp', function() {
    describe('phoneListComponent', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('should filter the amount of phone based on the query', function() {
            var query = element(by.model('$ctrl.query'));
            query.sendkeys('nexus');
            var phones = element.all(by.css('ul li'));
            expect(phones.length).toBe(1);

        });

        it('should render phone-specific links', function() {
            var query = element(by.model('$ctrl.query'));

            query.sendkeys('nexus');

            element.all(by.css('.phones li a')).first().click();
            expect(browser.getLocationAtUrl()).toBe('phones/nexus-s');
        });
    });
});