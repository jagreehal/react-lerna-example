const path = require('path');

module.exports = function(wallaby) {
  process.env.NODE_PATH +=
    path.delimiter + path.join(wallaby.projectCacheDir, 'packages');

  return {
    files: [
      'packages/**',
      'setUpTests.js',
      'package.json',
      '!packages/**/node_modules/**',
      '!packages/**/*.spec.js'
    ],
    tests: ['packages/**/*.spec.js', '!packages/**/node_modules/**'],
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node'
    },
    testFramework: 'jest',
    setup: function(wallaby) {
      var jestconfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestconfig);
    }
  };
};
