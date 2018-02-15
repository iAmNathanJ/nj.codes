import JS from '../../dist/js/manifest';

export default ({ css, data = {}, body }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>nj.codes</title>
    <meta name="description" content="Personal blog of Nathan Jacobs. JavaScript and general front-end web things.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="subresource" href="${JS['main.js']}">
    <link rel="preload" href="${JS['main.js']}" as="script">
    <link href="https://fonts.googleapis.com/css?family=Covered+By+Your+Grace" rel="stylesheet">
    <style>${css}</style>
    <link rel="stylesheet" type="text/css" media="(min-width:415px)" href="/css/wide.css">
  </head>
  <body>
    <div id="root">${body}</div>
    <script>window.nj = ${JSON.stringify(data)};</script>
    <script>
      var scripts = [createScript('${JS["main.js"]}')];

      var featureComplete = [
        'fetch' in window
      ].reduce(function(thumbsup, feature) {
        return thumbsup && feature;
      }, true);

      if (!featureComplete) {
        scripts.unshift(createScript('${JS["polyfill.js"]}'));
      }

      window.addEventListener('load', function() {
        scripts.forEach(function(script) {
          document.head.appendChild(script);
        });
      });

      function createScript(src, async) {
        var s = document.createElement('script');
        s.async = !!async;
        s.src = src;
        return s;
      }
    </script>
  </body>
</html>
`;
