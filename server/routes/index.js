import mock from './mock';
import api from './api';
import cache from './cache';
import app from './app';

export default function (router) {
  mock(router);
  api(router);
  cache(router);
  app(router);
  return router;
}
