import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

import App from './App';
// import Routes from './routes';

export default function serverRenderer() {
  return (req, res, next) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const helmet = Helmet.renderStatic();

    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.path} context={context}>
          <App />
        </StaticRouter>
      )
    );

    const styleTags = sheet.getStyleTags();

    res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">${markup}</div>
      <script type="text/javascript" src="/public/client.js" async></script>
    </body>

    </html>
  `);
  };
}

// export default function serverRenderer({ clientStats, serverStats }) {
//   return (req, res, next) => {
//     const sheet = new ServerStyleSheet();
//     const context = {};
//     const markup = renderToString(
//       sheet.collectStyles(
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>
//       )
//     );
//     const styleTags = sheet.getStyleTags();

//     res.status(200).send(
//       Template({
//         markup,
//         title: 'JC Freeform Vote'
//       })
//     );
//   };
// }
