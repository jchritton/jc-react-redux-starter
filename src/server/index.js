import express from 'express';
import webpack from 'webpack';
import chalk from 'chalk';
import { matchRoutes } from 'react-router-config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import clientConfig from '../../config/webpack/webpack.dev.client';
import serverConfig from '../../config/webpack/webpack.dev.server';
import configStore from '../client/common/store';

// Initialize Express server instance
const server = express();

// Create a Webpack compiler instance configured for client and server
const compiler = webpack([clientConfig, serverConfig]);

// Port setup
const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  req.store = configStore();
  return next();
});

server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/public/',
  serverSideRender: true
}));

server.use(webpackHotMiddleware(compiler.compilers.find(list => list.name === 'client')));
server.use(webpackHotServerMiddleware(compiler));

// Start server
server.listen(port, () => {
  console.log(chalk.blue(`Server is listening on port ${port}`));
});
