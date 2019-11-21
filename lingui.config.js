const path = require('path');

const config = {
  compileNamespace: 'cjs',
  fallbackLocale: 'en',
  sourceLocale: 'en',
  localeDir: path.resolve(__dirname, 'locale/'),
  srcPathDirs: [
    path.resolve('./cra/src'),
    path.resolve('./gatsby/src'),
    path.resolve('./nextjs'),
    path.resolve('./packages/'),
  ],
  srcPathIgnorePatterns: ['/node_modules/', '/.next/'],
  format: 'minimal',
};

module.exports = config;
