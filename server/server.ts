import express from 'express';
import { nextTick } from 'q';

const app = express();

app.use((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requsted-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET ,POST, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(5000, () => {
  console.log('port', 5000);
});
