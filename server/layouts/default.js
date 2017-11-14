export default ({ css, data = {}, body }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>nj.codes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" href="/js/main.js" as="script">
    <style>${css}</style>
  </head>
  <body>
    <div id="root">${body}</div>
    <script>window.nj = ${JSON.stringify(data)};</script>
    <script>
      var js = document.createElement('script');
      js.async = true;
      js.src = '/js/main.js';
      window.addEventListener('load', function() {
        document.head.appendChild(js);
      });
    </script>
  </body>
</html>
`;
