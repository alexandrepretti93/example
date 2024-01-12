var signUpCommands = {
    fillSignUpInfo: function (username, email, password) {
        return this
            .setValue('@userNameField', username)
            .setValue('@emailField', email)
            .setValue('@passwordField', password)
            .click('@continueBtn')
            .assert.urlContains('/workspace')
    },
}

module.exports = {
    commands: [signUpCommands],
    elements: {
        userNameField: {
            selector: '#username'
        },

        emailField: {
            selector: '#email',
        },

        passwordField: {
            selector: '#password',
        },

        continueBtn: {
            selector: 'body > div > main > section > div > div > div > form > div.c9d281cd0 > button',
        },

        logInBtn: {
            selector: 'body > div > main > section > div > div > div > div > p > a',
        },
        
    }
}