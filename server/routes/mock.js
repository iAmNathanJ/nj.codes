import client from '../../lib/gh-client';
import { read } from '../../lib/io';
import marked from 'marked';

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
}
