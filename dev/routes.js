const redirects = [
  { from: '/test/', to: '/test-moved/' }
];

module.exports = app => {
  app.use((req, res, next) => {
    res.set('X-Dev-Middleware', 'yep');

    const { path } = req;
    const redirect = redirects.find(r => r.from === path);
    if (redirect) {
      res.redirect(redirect.to);
    }
    next();
  });
};
