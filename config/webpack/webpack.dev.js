const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      './src/client/browser/index.js'
    ],
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'client.js',
      publicPath: '/public/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    // mode: 'development',
    context: path.resolve(__dirname, '../..'),
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'react'],
              plugins: ['styled-components']
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: './src/client/browser/server.js',
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'server.js',
      publicPath: '/public/',
      libraryTarget: 'commonjs2'
    },
    // mode: 'development',
    context: path.resolve(__dirname, '../..'),
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'react'],
              plugins: ['styled-components']
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
];
