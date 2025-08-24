const nextJest = require('next/jest');
const path = require('path');

const createJestConfig = nextJest({
  dir: './', // Your Next.js app directory
});

const customJestConfig = {
  setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setup.js')],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!your-esmodule-to-transform)/',
  ],
};

module.exports = createJestConfig(customJestConfig);
