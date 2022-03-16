const mongoose = require("mongoose");

const disliked = new mongoose.Schema({
  id: {
      type: String,
      unique: true
  },
  name: {
      type: String
  },
  created: {
      type: String,
  },
  price: {
      type: String,
  }
})

module.exports = mongoose.model("disliked", disliked);