module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/scr/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
