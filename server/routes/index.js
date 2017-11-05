import api from './api';
import cache from './cache';
import home from './home';
import articles from './articles';

export default function (router) {
  api(router);
  cache(router);
  home(router);
  articles(router);
  router.get('*', (req, res) => {
    res.end();
  });
  return router;
}
