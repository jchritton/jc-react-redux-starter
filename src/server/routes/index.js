import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import renderer from '../../client/browser/renderer';

import App from '../../client/browser/App';

const router = express.Router();

router.get('/', (req, res, next) => {
  renderer();
});

export default router;
