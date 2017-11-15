import React from 'react';
import { renderToString } from 'react-dom/server';
import Router from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import { routes, getData } from '../../src/js/routes';
import { read } from 'io';
import layout from 'layouts/default';

export default function (router) {
  router.get('*', async (req, res) => {
    const [ css, data = {} ] = await Promise.all([
      read('./dist/css/main.css'),
      getData(req.url)
    ]);
    const context = {};
    const page = layout({
      css,
      data,
      body: renderToString(
        <Router location={req.url} context={context}>
          {renderRoutes(routes, { data })}
        </Router>
      )
    });

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.send(page);
    }
  });
}
