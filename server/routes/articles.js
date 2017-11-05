import React from 'react';
import { renderToString } from 'react-dom/server';
import { read } from 'io';
import fetch from 'node-fetch';
import layout from 'layouts/default';
import App from 'components/app.js';
import SiteBody from 'components/site-body';
import Articles from 'components/articles';


export default function (router) {
  router.get('/articles', async (req, res) => {
    const [ articles, css ] = await Promise.all([
      fetch('http://localhost:3000/api/articles').then(response => response.json()),
      read('./dist/css/main.css')
    ]);

    const props = {
      Component: Articles,
      pageName: 'articles',
      data: articles
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

  router.get('/articles/:articleName', async (req, res) => {
    const { articleName } = req.params;
    const [ article, css ] = await Promise.all([
      fetch(`http://localhost:3000/api/articles/${articleName}`)
      .then(response => response.json()),
      read('./dist/css/main.css')
    ]);

    const props = {
      Component: SiteBody,
      pageName: 'articles',
      data: article
    };

    const page = layout({
      meta: {
        title: article.attributes.title,
        pageName: props.pageName,
        clientJS: 'main'
      },
      css: css,
      body: renderToString(<App {...props} />)
    });

    res.send(page);
  });
}
