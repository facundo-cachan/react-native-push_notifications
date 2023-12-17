module.exports = {
  cacheDirectory: '.jest/cache',
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['android', 'ios'],
  coverageThreshold: {
    './src/components/': {
      branches: 40,
      statements: 40
    },
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleDirectories: [__dirname, 'node_modules', 'utils'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/utils/'],
  preset: 'react-native',
  restoreMocks: true,
  setupFiles: [],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@fortawesome)'
  ],
  verbose: true
};
