getItStarted = {
    execute: function () {
        browser.tabs.query({active: true}, function(tabs) {
            browser.tabs.connect(tabs[0].id);
        });
    }
}

browser.browserAction.onClicked.addListener(getItStarted.execute);
