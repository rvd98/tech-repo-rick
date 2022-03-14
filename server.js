const express = require('express');
const { engine } = require('express-handlebars');
const app = express()
const port = process.env.PORT || 1337;
require('dotenv').config();
const connectDB = require('./config/db')
connectDB();

const productData = {
  boards:{
    TH_bluewaves: {
      name: 'Blue waves',
      creator: 'Tony Hawk',
      price: '95',
    },
    RS_redire: {
      name: 'RedFire',
      creator: 'Ryan Sheckler', 
      price: '80'
    },
    NH_brokenglass: {
      name: 'BrokenGlass', 
      creator: 'Nyjah Houston', 
      price: '105'
    }
  }
}

const userData = {
  likes: []
}


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
  res.render('home', { boardData: productData.boards });
});

app.get('/liked', (req, res) => {
  res.render('liked');
});

app.post('/like', (req, res) => {
  console.log("iets");
});

app.listen(port);