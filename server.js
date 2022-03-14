const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 1337;
require('dotenv').config();
const connectDB = require('./config/db')
connectDB();

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

app.post('/like', (req, res) => {
  console.log("iets");
});

app.listen(port);