export default (maxAge) => (req, res, next) => {
  res.set('Cache-Control', `public, max-age=${maxAge}`);
  next();
}
