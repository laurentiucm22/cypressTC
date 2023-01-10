const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // retries: 0,
    baseUrl: 'http://testingchallenges.thetestingmap.org/index.php',
    // defaultCommandTimeout: 6000,
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    // chromeWebSecurity: false,
  },
});
