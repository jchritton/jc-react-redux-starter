export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${title}</title>
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/assets/bundle.js"></script>
    </body>

    </html>
  `;
};
