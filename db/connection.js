const mongoose = require('mongoose');
const { key, user, businesses } = require('./config/config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(
  `mongodb+srv://${user}:${key}@everyone-eats-gltav.mongodb.net/${businesses}?retryWrites=true&w=majority`,
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
