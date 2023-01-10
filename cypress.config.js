const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    retries: 0,
    defaultCommandTimeout: 6000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
  },
});
