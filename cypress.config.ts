/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./tests/e2e/plugins/index.ts").default(on, config);
    },
    baseUrl: "http://localhost:3000",
    specPattern: "tests/e2e/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.ts",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: "src/**/*spec.ts",
  },
});
