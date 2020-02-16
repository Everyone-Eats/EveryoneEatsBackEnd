const mongoose = require("mongoose");
const { key, user, database } = require("./config/config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(
  `mongodb+srv://${user}:${key}@everyone-eats-gltav.mongodb.net/${database}?retryWrites=true&w=majority`,
  options,
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("db is connected");
    }
  }
);

module.exports = connection;
