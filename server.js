const express = require('express')
const { engine } = require('express-handlebars');
const app = express()

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.static('public'))

app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayoyt: 'main'
}));
app.set('view engine', '.hbs');
app.set("views", "./views");

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/liked', (req, res) => {
  res.render('liked');
});

app.listen(port);