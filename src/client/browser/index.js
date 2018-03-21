import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }
`;

hydrate(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
