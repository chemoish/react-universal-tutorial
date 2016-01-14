var webpack = require('webpack');

var config = require('./webpack.config.client');

config.cache   = true;
config.debug   = true;
config.devtool = 'inline-source-map';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

config.module.postLoaders = [{
  exclude: /node_modules/,
  loader:  'babel-loader',
  test:    /\.jsx?$/,

  query: {
    cacheDirectory: true,

    presets: [
      'es2015',
      'react'
    ],

    // NOTE: https://github.com/gaearon/babel-plugin-react-transform
    env: {
      development: {
        plugins: [
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',

              imports: [
                'react'
              ],

              locals: [
                'module'
              ]
            }]
          }]
        ]
      }
    }
  }
}];

config.devServer = {
  historyApiFallback: true,
  hot:                true,
  inline:             true
};

module.exports = config;
