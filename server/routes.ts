import express from 'express';
import funcs from './utils';
const app = express.Router();
const util = new funcs() ;
export { app as routes};

app.get('/', (req, res) => res.send('walla hellow world'));
app.get('/users', (req, res) => {
  console.log('/user');
  res.send([{ data: 'users list ' }]);
});
app.get('/list', (req, res) => res.send([{ data: 'list simple' }]));
app.get('/graph', (req, res) => res.send([{ data: util.generateGraph() }]));
