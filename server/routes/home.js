import { read } from 'io';
import React from 'react';
import { renderToString } from 'react-dom/server';
import layout from 'layouts/default';
import App from 'components/app.js';
import SiteBody from 'components/site-body';

export default function (router) {
  router.get('/', async (req, res) => {
    const css = await read('./dist/css/main.css');

    const props = {
      Component: SiteBody,
      pageName: 'home',
    };

    const page = layout({
      meta: {
        title: props.pageName,
        pageName: props.pageName,
        clientJS: 'articles'
      },
      css: css,
      body: renderToString(<App {...props} />)
    });

    res.send(page);
  });
}
