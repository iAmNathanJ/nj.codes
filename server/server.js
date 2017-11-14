import env from 'env';
import path from 'path';
import http from 'http';
import express from 'express';
import compression from 'express-static-gzip';
import helmet from 'helmet';
import apicache from 'apicache';
import routes from 'routes/';

const app = express();
const server = http.createServer(app);
const router = express.Router();
const cache = apicache.options({ debug: true }).middleware;

app.use('/js', compression(path.resolve('./dist/js'), { enableBrotli: true }));
app.use('/css', compression(path.resolve('./dist/css'), { enableBrotli: true }));
app.use('/images', compression(path.resolve('./dist/images'), { enableBrotli: true }));
app.use('/api', cache('1 hour'));
app.use(express.static(path.resolve('dist')));
app.use(helmet());
app.use(routes(router));

server.listen(PORT, () => {
  console.log(`[${ENV}] Server open at //localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit());
});

process.on('unhandledRejection', console.error);
