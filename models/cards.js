const mongoose = require("mongoose");

const cards = new mongoose.Schema({
  id: {
      type: String,
      unique: true
  },
  name: {
      type: String
  },
  creator: {
      type: String,
  },
  price: {
      type: String,
  },
  imgName: {
      type: String,
  }
})

module.exports = mongoose.model("cards", cards);