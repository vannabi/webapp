module.exports = {
  verbose: true,
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testEnvironment: "node",
  testRegex: "(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: ["**/*/src/*.{js,ts}"],
  coverageReporters: ["json", "lcov", "text", "clover", "html"]
};
