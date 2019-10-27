import express from 'express';
const app = express.Router();

export { app as routes };

app.get('/', (req, res) => res.send('walla hellow world'));
app.get('/users', (req, res) => {
  console.log('/user');
  res.send([{ data: 'users list ' }]);
});
app.get('/list', (req, res) => res.send([{ data: 'list simple' }]));
