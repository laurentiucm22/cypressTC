const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 0,
    baseUrl: "https://practice.automationtesting.in",
    defaultCommandTimeout: 6000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    blockHosts: ["www.google-analytics.com"],
  },
});
