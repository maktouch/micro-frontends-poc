const withTM = require('next-transpile-modules');
const nextCSS = require('@zeit/next-css');
const nextSass = require('@zeit/next-sass');
const nextImages = require('next-optimized-images');
const path = require('path');

module.exports = nextImages(
  nextSass(
    nextCSS(
      withTM({
        // transpile-module
        transpileModules: ['@poc/common'],

        // next-sass
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName:
            process.env.NODE_ENV === 'production' ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]',
          context: path.resolve(__dirname, 'components'),
        },
        sassLoaderOptions: {
          // data: `@import "global";`, // autoimport that into each scss
          // includePaths: ['./scss'],
        },
      })
    )
  )
);
