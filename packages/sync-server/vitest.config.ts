export default {
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    globalSetup: ['./vitest.globalSetup.ts'],
    globals: true,
    coverage: {
      enabled: false,
    },
    maxWorkers: 2,
  },
};
