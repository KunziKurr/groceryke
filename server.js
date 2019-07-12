const express = require('express');
const exphbs = require('express-handlebars');

const server = express();
server.set('view engine', 'handlebars');

// ==============================Routes============================================
server.get('/', (req, res) => {
  res.render('index');
});
server.get('/Stylesheet', (req, res) => {
  res.render('master.css');
});
// About
server.get('/about', (req, res) => {
  res.render('about');
});
// ============================End of Routes=======================================


// ============================Middlewares=========================================
  // handlebars engine
  server.engine('handlebars', exphbs({
    defaultLayout:'main'
  }));

  // Static Files

  server.use(express.static('public'))

// ==========================End of Middlewares====================================

const port = 9000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
