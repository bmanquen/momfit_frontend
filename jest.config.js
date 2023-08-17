const nextJest = require("next/jest");
const createJestConfig = nextJest();

const customJestConfig = {
  collectCoverage: true,
  coverageProvider: "v8",
  coverageReporters: ["cobertura", "html", "text", "text-summary"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
