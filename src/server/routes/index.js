import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../../client/browser/App';
import template from '../../client/browser/template';

const router = express.Router();

router.get('/', (req, res) => {
  const appString = renderToString(<App />);

  res.send(
    template({
      body: appString,
      title: 'JC Freeform Vote'
    })
  );
});

export default router;
