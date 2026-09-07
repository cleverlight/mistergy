/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: false }],
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  testTimeout: 300000,
};
