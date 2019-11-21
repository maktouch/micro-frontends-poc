module.exports = {
  presets: [require.resolve('next/babel'), require.resolve('@babel/preset-react')],
  plugins: [
    [require.resolve('babel-plugin-macros')],
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-class-properties'),
  ],
};
