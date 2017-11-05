export default ({ meta = {}, css, body }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>nj: ${meta.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" href="/js/main.js" as="script">
    <style>
      ${css}
    </style>
  </head>
  <body>
    <div id="root">${body}</div>
    <script>
      window.nj = ${JSON.stringify(meta)};
    </script>
    <script src="/js/${meta.clientJS}.js"></script>
  </body>
</html>
`;
