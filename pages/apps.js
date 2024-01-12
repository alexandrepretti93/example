var appsCommands = {
    goToSpecificApp: function (app) {
        return this
            .click('@searchField')
            .setValue('@searchInput', app)
            .useXpath()
            .click("//span[contains(text(),'"+app+"')]")

    },
}

module.exports = {
    commands: [appsCommands],
    elements: {
        searchField: {
            selector: '#__next > div > main > div > div > div.mantine-4meq3d > div > input'
        },

        searchInput: {
            selector: '#command-palette-search-input',
        },

        mainSearch: {
            selector: '#headlessui-dialog-panel-\:rb\: > div.flex-1.overflow-y-auto.focus\:outline-none.p-2.space-y-4 > div > ul',
        },

        searchResults:{
            selector: '#headlessui-dialog-panel-\:rb\: > div.flex-1.overflow-y-auto.focus\:outline-none.p-2.space-y-4 > div > ul > a.command-palette-list-item.block.w-full.text-left.px-3\.5.py-2\.5.rounded-md.hover\:bg-gray-100.dark\:hover\:bg-gray-800.focus\:ring-1.focus\:ring-gray-300.focus\:outline-none.flex.items-center.space-x-2\.5.justify-between.bg-gray-200\/50.dark\:bg-gray-800.cursor-pointer > div'
        },
        
    }
}