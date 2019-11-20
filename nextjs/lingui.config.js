const path = require('path');

const config = {
  ...require('../lingui.config'),
  srcPathDirs: [path.resolve(__dirname)],
  srcPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

module.exports = config;
