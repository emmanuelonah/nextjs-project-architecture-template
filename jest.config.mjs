import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config = {
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  coverageThreshold: { '<rootDir>/src/**/*.test.@(js|jsx|ts|tsx)': { lines: 85 } },
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }] },
  moduleNameMapper: {
    '^app': '<rootDir>/src/app/',
    '^test': '<rootDir>/src/test/',
    '^utils': '<rootDir>/src/utils/',
    '^hooks': '<rootDir>/src/hooks/',
    '^models': '<rootDir>/src/models/',
    '^routes': '<rootDir>/src/routes/',
    '^layouts': '<rootDir>/src/layouts/',
    '^services': '<rootDir>/src/services/',
    '^components': '<rootDir>/src/components/',
    '^globalstore': '<rootDir>/src/globalstore/',
    '^design-system': '<rootDir>/src/design-system/',
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/file-mock.js',
  },
  coveragePathIgnorePatterns: [
    './node_modules',
    './.next',
    './.storybook',
    './coverage',
    './jest.config.js',
    './next.config.js',
    '.svg.(ts|tsx)$',
    '.stories.(ts|tsx)$',
    '<rootDir>/public',
  ],
};

export default createJestConfig(config);
