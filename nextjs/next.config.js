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

        // config
        webpack: (config, { isServer }) => {
          // Fixes npm packages that depend on `fs` module
          config.node = {
            fs: 'empty',
            module: 'empty',
          };

          // import other kind of files
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
              loader: 'file-loader',
              options: {
                outputPath: 'static/assets',
                publicPath: '/_next/static/assets/',
                name: '[name].[contenthash].[ext]',
              },
            },
          });

          return config;
        },
      })
    )
  )
);
