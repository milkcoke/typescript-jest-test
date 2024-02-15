/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/_setup.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  testRegex: 'test/(.*\\.)(test|spec)\\.ts$',
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node'
}