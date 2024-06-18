const { main } = require('../../package.json')

module.exports = {
  'default configuration test' : function (browser) {
    browser.url('http://localhost:8008')
    // The plugin must be added
    browser.expect.element(`script[src="/plugins/package/${main}"]`).to.be.present
  },
  'it configures google analytics': !function(browser) {
    browser.url('http://localhost:8008')
    // Wait for the app to be started
    browser.waitForElementVisible('.landing')
    browser.assert.titleContains('Datashare')
    // A script tag was created for Google Analytics
    browser.expect.element(`script[src="https://www.google-analytics.com/analytics.js"]`).to.be.present
  }
}
