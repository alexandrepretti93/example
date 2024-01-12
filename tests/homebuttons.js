module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 7000
    },
    
    "Go to Sign Up": function(browser){
        var home = browser.page.home()
        home.clickSignUp()
    },

    "Go to Apps": function(browser){
        var home = browser.page.home()
        home.clickApps()
    },

    "Go to About": function(browser){
        var home = browser.page.home()
        home.clickAbout()
    },

    "Go to Blog": function(browser){
        var home = browser.page.home()
        home.clickBlog()
    },

    "Go to Try It": function(browser){
        var home = browser.page.home()
        home.clickTryIt()
    },

    after: function (browser) {
        browser.end();
    }
};