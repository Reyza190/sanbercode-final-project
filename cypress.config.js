const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    e2e: {
      baseUrl: "https://kasirdemo.belajarqa.com",
      chromeWebSecurity: false,
      videoUploadOnPasses: false,
      viewportWidth: 1920,
      viewportHeight: 1080,
      defaultCommandTimeout: 10000,
      watchForFileChanges: false
    },
  },
});
