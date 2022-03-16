const express = require('express');
const router = express.Router();
const Cards = require('../models/cards')

router.get('/', (req, res) => {
  Cards.find().then((cards) => {
    res.render('home', { cards: cards.map(card => Object.assign({}, { name: card.name, creator: card.creator, price: card.price, imgName: card.imgName, id: card.id })) });
  })
});

router.get('/liked', (req, res) => {
  res.render('liked');
});

router.post('/like', (req, res) => {
  console.log("iets");
  const id = req.query.id;
  const price = req.query.price;
  console.log(id, price);
});

module.exports = router
