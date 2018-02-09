import { resolve, join, basename } from 'path';
import { dir, read } from '../../lib/io';
import parseArticle from '../../lib/parse-article';

export default function(router) {
  if (ENV === 'production') return;

  router.get('/api/intro', async (req, res) => {
    try {
      const intro = await read('./README.md');
      res.json({
        __html: marked(intro)
      });
    } catch (e) {
      console.error(e);
      res.end('uh oh');
    }
  });

  router.get('/api/articles', async (req, res) => {
    try {
      const [ drafts, articles ] = await Promise.all([
        dir('./src/drafts'),
        dir('./src/articles')
      ]);
      const entries = await Promise.all(
        [...drafts, ...articles].map(async file => ({
          content: await read(file),
          filename: basename(file)
        }))
      );
      res.json(entries.map((entry, i) => {
        const oid = i;
        const { filename, content } = entry;
        const [ path ] = filename.split('.');
        return {
          ...parseArticle(content),
          filename,
          oid,
          path,
          url: `https://nj.codes/articles/${path}`,
          articleLink: `https://github.com/iAmNathanJ/nj.codes/blob/master/src/articles/${filename}`,
        };
      }).sort((a, b) => {
        return b['date-authored'] - a['date-authored'];
      }));
    } catch (e) {
      console.error(e);
      res.end('uh oh');
    }
  });
}
