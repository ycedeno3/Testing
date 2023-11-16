const { defineConfig } = require("cypress");

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	chromeWebSecurity: false,
	responseTimeout: 120e3,
	projectId: "doa5q1",
	env: {
		apiTesting: {
			urlBase: "https://petstore.swagger.io/v2",
		},
		uiAutomation: {
			urlHomePage: "https://opencart.abstracta.us/"
		},
		e2e: {
			// We've imported your old cypress plugins here.
			// You may want to clean this up later by importing these.
			setupNodeEvents(on, config) {
				return require("./cypress/plugins/index.js")(on, config);
			},
			specPattern: "cypress/e2e/**/*.freature",
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
