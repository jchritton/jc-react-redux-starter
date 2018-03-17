const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const baseConfig = require('./webpack.dev.base');

const clientConfig = {
  name: 'client',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/client/browser/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
    publicPath: '/public/'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: './public/index.html'
    // }),
    // new GoogleFontsPlugin({
    //   fonts: [{ Montserrat: '500' }]
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = merge(baseConfig, clientConfig);
