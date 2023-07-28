import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  /**
   * Provide the path to your Next.js app to load
   * next.config.js and .env files in your test environment
   */
  dir: './',
});

/**
 * Add any custom config to be passed to Jest
 */
const config = {
  /**
   * Add more setup options before each test is run
   * setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   */
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    '<rootDir>/src/**/*.test.@(js|jsx|ts|tsx)': {
      lines: 85,
    },
  },
  /**
   * import aliases
   */
  moduleNameMapper: {
    '^app': '<rootDir>/src/app/',
    '^utils': '<rootDir>/src/utils/',
    '^hooks': '<rootDir>/src/hooks/',
    '^models': '<rootDir>/src/models/',
    '^routes': '<rootDir>/src/routes/',
    '^styles': '<rootDir>/src/styles/',
    '^layouts': '<rootDir>/src/layouts/',
    '^services': '<rootDir>/src/services/',
    '^components': '<rootDir>/src/components/',
    '^globalstore': '<rootDir>/src/globalstore/',
  },
  coveragePathIgnorePatterns: [
    '.presenter.(ts|tsx)$',
    '<rootDir>/src/globalstore',
    '<rootDir>/src/styles/index.ts',
    '<rootDir>/src/styles/assets/index.ts',
    '<rootDir>/src/styles/global-styles.ts',
  ],
};

/**
 * createJestConfig is exported this way to ensure
 * that next/jest can load the Next.js config which is async
 */
export default createJestConfig(config);
