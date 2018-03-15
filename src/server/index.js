import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import index from './routes';
import config from '../../config/webpack/webpack.dev';

const server = express();
const compiler = webpack(config);

// Port setup
const port = process.env.PORT || 8080;

// Set up directory for static served files
server.use(express.static(path.join(__dirname, '../../public')));

server.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/public/',
    serverSideRender: true
  })
);

server.use(
  webpackHotMiddleware(
    compiler.compilers.find(compiler => compiler.name === 'client')
  )
);

server.use(webpackHotMiddleware(compiler));
server.use(webpackHotServerMiddleware(compiler));

// Start server
server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
