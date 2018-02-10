import client from '../../lib/gh-client';
import { read } from '../../lib/io';
import parseArticle from '../../lib/parse-article';

export default function(router) {
  router.get('/api/intro', async (req, res) => {
    try {
      const query = await read('server/queries/intro.graphql');
      const data = await client.request(query);
      const { intro } = data.repository;
      res.json({
        body: intro.text,
        __html: marked(intro.text)
      });
    } catch (e) {
      console.error(e);
      res.end('uh oh');
    }
  });

  router.get('/api/articles', async (req, res) => {
    try {
      const query = await read('server/queries/articles.graphql');
      const data = await client.request(query);
      const { entries } = data.repository.articles;
      res.json(entries.map(entry => {
        const { oid, filename } = entry;
        const [ path ] = filename.split('.');
        return {
          ...parseArticle(entry.content.text),
          oid,
          filename,
          path,
          url: `https://nj.codes/articles/${path}`,
          articleLink: `https://github.com/iAmNathanJ/nj.codes/blob/master/src/articles/${filename}`
        };
      }).sort((a, b) => {
        return b['date-authored'] - a['date-authored'];
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
      const { oid } = article;
      res.json({
        ...parseArticle(article.text),
        oid,
        articleLink,
      });
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
        fetch(`${protocol}://${hostname}${port}/api/repos/file-pluck`).then(handleResponse)
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
