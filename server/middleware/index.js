import helmet from 'helmet';
import clientCache from './client-cache';

export default function applyMiddleware(app) {
  if (ENV !== 'production') return;
  app.use('/', clientCache(300));
  app.use(/\/(js|css|images)/, clientCache(31536000));
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }));
}
