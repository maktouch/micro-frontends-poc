const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = [
  ['use-babel-config', '.babelrc'],
  {
    webpack: config => {
      const rule = {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: ['packages/common'].map(p => path.resolve(root, p)),
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve('babel-preset-react-app/webpack-overrides'),
          presets: [require.resolve('babel-preset-react-app')],
          plugins: [
            [
              'babel-plugin-named-asset-import',
              {
                loaderMap: {
                  svg: { ReactComponent: '@svgr/webpack?-svgo,+ref![path]' },
                },
              },
            ],
          ],
        },
      };

      config.module.rules.push(rule);

      return config;
    },
  },
];
