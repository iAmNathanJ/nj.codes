import mock from './mock';
import api from './api';
import feed from './feed';
import cache from './cache';
import app from './app';

export default function (router) {
  mock(router);
  api(router);
  feed(router);
  cache(router);
  app(router);
  return router;
}
