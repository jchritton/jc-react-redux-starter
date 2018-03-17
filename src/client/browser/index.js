import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal`
  @font-face {
    font-family: "Montserrat";
    src: url("./public/Montserrat-Medium.ttf") format("truetype");
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat, sans-serif";
  }
`;

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
