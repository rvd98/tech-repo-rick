const mongoose = require("mongoose");

const liked = new mongoose.Schema({
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
  },
  imgName: {
      type: String,
  }
})

module.exports = mongoose.model("liked", liked);