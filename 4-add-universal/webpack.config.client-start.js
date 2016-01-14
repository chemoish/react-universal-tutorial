var webpack = require('webpack');

var config = require('./webpack.config.client');

var hostname = 'localhost';
var port     = 8000;

config.cache   = true;
config.debug   = true;
config.devtool = 'inline-source-map';

config.entry.index.unshift(
  // http://webpack.github.io/docs/webpack-dev-server.html#inline-mode
  'webpack-dev-server/client?http://' + hostname + ':' + port,

  // http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement
  'webpack/hot/only-dev-server'
);

config.output.publicPath = 'http://' + hostname + ':' + port + '/client';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
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
  hot:    true,
  inline: true,
  noInfo: true,
  port:   port
};

module.exports = config;
