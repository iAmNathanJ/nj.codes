import apicache from 'apicache';

export default function(router) {
  router.get('/api/cache/index', (req, res) => {
    res.json(apicache.getIndex());
  });

  // add route to manually clear target/group
  router.get('/api/cache/clear/:target?', (req, res) => {
    const { target } = req.params;
    res.json(apicache.clear(target));
  });
}
