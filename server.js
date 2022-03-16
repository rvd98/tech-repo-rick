const express = require('express');
const { engine } = require('express-handlebars');
const app = express()
const port = process.env.PORT || 1337;
require('dotenv').config();
const connectDB = require('./config/db')
connectDB();

const route = require('./routes/router')

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.static('public'))

app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayoyt: 'main'
}));
app.set('view engine', '.hbs');
app.set("views", "./views");

app.use('/', route)
app.listen(port);