import client from '../../lib/gh-client';
import { read } from '../../lib/io';
import fm from 'front-matter';

export default function(router) {
  router.get('/api/articles', async (req, res) => {
    try {
      const query = await read('server/queries/articles.graphql');
      const data = await client.request(query);
      const { entries } = data.repository.articles;
      res.json(entries.map(entry => {
        const { oid, filename } = entry;
        const { attributes, body } = fm(entry.content.text);
        return {
          ...attributes,
          body,
          oid,
          filename,
          path: filename.split('.')[0]
        };
      }).sort((a, b) => {
        return a['date-authored'] - b['date-authored'];
      }));
    } catch (e) {
      console.error(e);
      res.end('uh oh');
    }
  });

  router.get('/api/articles/:articleName', async (req, res, next) => {
    const { articleName } = req.params;
    const articlePath = `master:src/articles/${articleName}.md`;
    const articleLink = `https://github.com/iAmNathanJ/nj.codes/blob/master/src/articles/${articleName}.md`
    try {
      const query = await read('server/queries/article.graphql');
      const data = await client.request(query, { articlePath });
      const { article } = data.blog;
      const { attributes, body } = fm(article.text);
      res.json({ ...attributes, body, articleLink });
    } catch (e) {
      console.error(e);
      res.write(e.message);
      next();
    }
  });

  router.get('/api/repos/:repoName', async (req, res, next) => {
    const { repoName } = req.params;
    try {
      const query = await read('server/queries/repo.graphql');
      const data = await client.request(query, { repoName });
      const { repo } = data;
      res.json(repo);
    } catch (e) {
      console.error(e);
      res.write(e.message);
      next();
    }
  });

  router.get('/api/projects', async (req, res, next) => {
    const { protocol, hostname } = req;
    const port = (ENV === 'development') ? ':3000' : '';
    try {
      const projects = await Promise.all([
        fetch(`${protocol}://${hostname}${port}/api/repos/postcss-split-mq`).then(handleResponse),
        fetch(`${protocol}://${hostname}${port}/api/repos/rrun`).then(handleResponse),
        fetch(`${protocol}://${hostname}${port}/api/repos/nj.codes`).then(handleResponse)
      ]);
      res.json(projects);
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
