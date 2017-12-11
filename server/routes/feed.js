import client from '../../lib/gh-client';
import { read } from '../../lib/io';
import fm from 'front-matter';
import marked from 'marked';
import rss from 'rss';

export default function(router) {
  router.get('/feed', async (req, res, next) => {
    const { protocol, hostname } = req;
    const port = (ENV === 'development') ? ':3000' : '';
    try {
      const articles = await fetch(`${protocol}://${hostname}${port}/api/articles`).then(handleResponse);
      const feed = new rss({
        title: 'nj.codes',
        description: 'Article feed',
        feed_url: 'https://nj.codes/feed',
        site_url: 'https://nj.codes',
        copyright: `${new Date().getFullYear()} Nathan Jacobs`
      });
      articles.forEach(a => {
        feed.item({
          ...a,
          url: a.url,
          description: a.body,
          date: a['date-authored']
        });
      });
      res.set('Content-Type', 'text/xml')
      res.send(feed.xml({indent: true}));
    } catch (e) {
      console.error(e);
      res.write(e.message);
      next();
    }
  });
}

function handleResponse(response) {
  return response.json();
}
