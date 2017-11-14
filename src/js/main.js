import 'wicg-focus-ring';
import React from 'react';
import { hydrate } from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { routes, getData } from './routes';

const data = window.nj || {};
hydrate(
  <Router>
    {renderRoutes(routes, { data })}
  </Router>,
  document.querySelector('#root')
);
