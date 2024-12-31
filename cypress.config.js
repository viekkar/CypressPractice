const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "y278n3",
  defaultCommandTimeout: 6000,
  reporter:"cypress-mochawesome-reporter",
emv:{
  url:'https://rahulshettyacademy.com/loginpagePractise/'
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:"cypress/integration/examples/*.js",
  },
});