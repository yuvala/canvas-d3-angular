import express from 'express';
import { nextTick } from 'q';
import { routes } from './routes';
const port = 5000;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requsted-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET ,POST, PUT, DELETE');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`@server log:${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
app.use('/', routes);

app.listen(port, '127.0.0.1', () => {
  console.log(`server started at http://localhost:${port}`);
});
