const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.dev.base');

const serverConfig = {
  name: 'server',
  target: 'node',
  entry: './src/client/browser/renderer.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/build/',
    libraryTarget: 'commonjs2'
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
