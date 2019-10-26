import express from 'express';
const app = express.Router();

export { app as routes };

app.get('/', (req, res) => res.send('walla hellow world'));
app.get('/users', (req, res) => {
 // console.log('/user', req, res);
  res.send('users list');
});
app.get('/list', (req, res) => res.send('list simple'));
