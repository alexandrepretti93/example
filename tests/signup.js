module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
        browser.window.maximize()
    },
    
    "Signup process": function(browser){
        var home = browser.page.home()
        var signup = browser.page.signup()

        let uuid = Math.floor(Math.random() * 100000)
        const usernameuuid = 'teste' + uuid
        const emailuuid =  usernameuuid + '@mail.com'
   
        home.clickSignUp()
        signup.fillSignUpInfo(usernameuuid, emailuuid, "P@ssword1")
    },

    

    after: function (browser) {
        browser.end();
    }
};