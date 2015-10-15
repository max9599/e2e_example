/**
 * Created by maxim on 14.10.15.
 */
describe('home page tests', function() {
    var HomePage = require('./pageObjects/HomePageObject.js');
    var homePage = new HomePage();

    beforeEach(function () {
        browser.get('/');
    });

    it('should test show button', function () {
        homePage.clickButton("Show data");
        expect(homePage.getList()).toEqual(["testData1", "testData2"]);
    });
});