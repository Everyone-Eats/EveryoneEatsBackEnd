const mongoose = require('mongoose');
const key = require('./config/config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(
  `mongodb+srv://every-admin-eats:${key}@everyone-eats-gltav.mongodb.net/Businesses?retryWrites=true&w=majority`,
  options,
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('db is connected');
    }
  }
);

module.exports = connection;
