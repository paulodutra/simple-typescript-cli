/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    roots: ['<rootDir>/test'],
    coverageDirectory: 'coverage',
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!**/test/**',
        '!**/config/**'
    ],
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts', '**/*.test.ts'],
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@test/(.*)$': '<rootDir>/test/$1'
    }
}
