const express = require('express');
const ws = require('ws');

const app = express();

app.get('/', (req,res) => {
  res.end('hello world');
}).listen(3000, () => console.log('Listening on 3000'));
