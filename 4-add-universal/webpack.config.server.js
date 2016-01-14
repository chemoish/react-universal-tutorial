var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',

  entry: {
    index: [
      './src/server'
    ]
  },

  output: {
    filename: '[name].js',
    path:     path.join(__dirname, 'server')
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__:     false,
      __SERVER__:     true,
      __PRODUCTION__: true,
      __DEV__:        false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    preLoaders: [{
      // NOTE: https://github.com/MoOx/eslint-loader
      exclude: /node_modules/,
      loader:  'eslint-loader',
      test:    /\.jsx?$/
    }],

    postLoaders: [{
      // NOTE: https://github.com/babel/babel-loader
      exclude: /node_modules/,
      loader:  'babel-loader',
      test:    /\.jsx?$/,

      query: {
        presets: [
          'es2015',
          'react'
        ]
      }
    }]
  },

  // SEE: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
  externals: fs.readdirSync('node_modules').reduce(function (accumulator, module) {
    accumulator[module] = 'commonjs ' + module;

    return accumulator;
  }, {}),

  // NOTE: https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    // NOTE: https://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: [
      '',
      '.js',
      '.jsx'
    ],

    // NOTE: https://webpack.github.io/docs/configuration.html#resolve-root
    root: path.join(__dirname, 'src')
  }
};
