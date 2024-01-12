module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
        browser.window.maximize()
        var home = browser.page.home()
        home.clickApps()
    },
    
    "Go to Age Calculator": function(browser){
        var apps = browser.page.apps()
        apps.goToSpecificApp('Age Calculator')
        browser.assert.urlContains('/age-calculator')
    },

    "Go to Payment Calculator": function(browser){
        var apps = browser.page.apps()
        var home = browser.page.home()
        home.clickApps()
        apps.goToSpecificApp('Payment Calculator')
        browser.assert.urlContains('/payment-calculator')
    },

    "Go to Rent Calculator": function(browser){
        var apps = browser.page.apps()
        var home = browser.page.home()
        home.clickApps()
        apps.goToSpecificApp('Rent Calculator')
        browser.assert.urlContains('/rent-calculator')
    },

    after: function (browser) {
        browser.end();
    }
};