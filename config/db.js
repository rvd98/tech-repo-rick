const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB - connected')
  } catch (err) {
    console.log('error occurred while trying to connect to db:', err);
    throw err;
  }
};

module.exports = connectDB;