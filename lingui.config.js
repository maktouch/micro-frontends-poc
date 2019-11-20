const path = require('path');

const config = {
  compileNamespace: 'cjs',
  fallbackLocale: 'en',
  sourceLocale: 'en',
  localeDir: path.resolve(__dirname, 'locale/'),
  srcPathIgnorePatterns: ['/node_modules/', '/.next/'],
  format: 'minimal',
};

module.exports = config;
