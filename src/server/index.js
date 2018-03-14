import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';

import index from './routes';
import config from '../../config/webpack.config';

const server = express();

const compiler = webpack(config);

// Port setup
const port = process.env.PORT || 8080;

// Set up directory for static served files
server.use(express.static(path.join(__dirname, '../../public')));

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// Set up index as router on root
server.use('/', index);

// Start server
server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
