const webpack = require('webpack');
const path = require('path');

// const config = {
//   context: path.resolve(__dirname, '..'),
//   resolve: {
//     modules: ['node_modules', 'src']
//   },
//   module: {
//     rules: [
//       {
//         test: /\js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['babel-preset-env', 'react'],
//             plugins: ['styled-components']
//           }
//         }
//       }
//     ]
//   }
// };

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '..'),
  // resolve: {
  //   modules: ['node_modules', 'src']
  // },
  module: {
    rules: [
      {
        test: /\js$/,
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
  name: 'browser',
  target: 'web',
  entry: './src/client/browser/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map'
};

// const serverConfig = {
//   ...config,
//   name: 'server',
//   target: 'node',
//   entry: './src/server/index.js'
// };
