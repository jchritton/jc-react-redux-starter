import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }
`;

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
