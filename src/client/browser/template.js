export default ({ markup, title }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${title}</title>
    </head>
    <body>
      <div id="root">${markup}</div>
      <script type="text/javascript" src="/public/client.js" async></script>
    </body>

    </html>
  `;
};
