var path = require('path');

module.exports = {
  entry: {
    bundle: [
      './src/client'
    ],

    index: './src/index.html'
  },

  output: {
    filename: '[name].js',
    path:     path.join(__dirname, 'client')
  },

  module: {
    preLoaders: [{
      // NOTE: https://github.com/MoOx/eslint-loader
      exclude: /node_modules/,
      loader:  'eslint-loader',
      test:    /\.jsx?$/
    }],

    loaders: [{
      // NOTE: https://github.com/webpack/file-loader
      exclude: /node_modules/,
      loader:  'file?name=[name].[ext]',
      test:    /\.html$/
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
