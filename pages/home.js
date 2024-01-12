var homeCommands = {
    clickSignUp: function () {
        return this.navigate()
            .click('@signupBtn')
            .assert.urlContains('microappai.us.auth0.com')
    },
    clickAbout: function () {
        return this.navigate()
            .click('@aboutBtn')
            .assert.urlContains('/about')
    },
    clickBlog: function () {
        return this.navigate()
            .click('@blogBtn')
            .assert.urlContains('/blog')
    },
    clickApps: function () {
        return this.navigate()
            .click('@appsBtn')
            .assert.urlContains('/apps')
    },
    clickTryIt: function () {
        return this.navigate()
            .click('@tryItBtn')
            .assert.urlContains('/ai-component-generator')
    },
}

module.exports = {
    url: 'https://www.microapp.io/',
    commands: [homeCommands],
    elements: {
        signupBtn: {
            selector: '#__next > div > header > div.mantine-Container-root.mantine-uyc2mt > div:nth-child(2) > a'
        },
        aboutBtn: {
            selector: '#__next > div > header > div.mantine-Container-root.mantine-uyc2mt > div:nth-child(2) > div.mantine-Group-root.mantine-MediaQuery-media.mantine-dhrao7 > a:nth-child(3)',
        },
        blogBtn:{
            selector: '#__next > div > header > div.mantine-Container-root.mantine-uyc2mt > div:nth-child(2) > div.mantine-Group-root.mantine-MediaQuery-media.mantine-dhrao7 > a:nth-child(2)',
        },
        appsBtn: {
            selector: '#__next > div > header > div.mantine-Container-root.mantine-uyc2mt > div:nth-child(2) > div.mantine-Group-root.mantine-MediaQuery-media.mantine-dhrao7 > a:nth-child(1)'
        },
        tryItBtn:{
            selector: '#__next > div > main > div > div > div.mantine-1h0aurr > div.mantine-1e7arra > div > div.mantine-Group-root.mantine-1kc0b56 > div.mantine-ipq6rl > a > button'
        },
    }
}