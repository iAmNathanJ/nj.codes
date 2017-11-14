import cache from './cache';
import api from './api';
import app from './app';

export default function (router) {
  cache(router);
  api(router);
  app(router);
  return router;
}
