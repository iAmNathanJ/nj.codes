import client from '../../lib/gh-client';
import { read } from '../../lib/io';
import fm from 'front-matter';

export default function(router) {
  router.get('/api/articles', async (req, res) => {
    try {
      const query = await read('server/queries/articles.graphql');
      const data = await client.request(query);
      res.json(data.repository.articles.entries);
    } catch (e) {
      console.error(e);
      res.end('uh oh');
    }
  });

  router.get('/api/articles/:articleName', async (req, res, next) => {
    const { articleName } = req.params;
    const articlePath = `master:src/articles/${articleName}.md`;
    try {
      const query = await read('server/queries/article.graphql');
      const data = await client.request(query, { articlePath });
      const { article } = data.blog;
      const { attributes, body } = fm(article.text);
      res.json({
        article,
        attributes,
        body
      });
    } catch (e) {
      console.error(e);
      res.write(e.message);
      next();
    }
  });
}

