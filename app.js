const express = require('express');
const ws = require('ws');

// express instance
const app = express();
// views
app.set('views', './views');
// view engine
app.set('view engine', 'pug');
// static files
app.use(express.static('scripts'));
// get instance
app.get('/', (req,res) => {
  res.render('index');
}).listen(3000, () => console.log('Listening on 3000'));
