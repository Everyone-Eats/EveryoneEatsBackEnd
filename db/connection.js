const mongoose = require("mongoose");
const { key, user, database } = require("./config/config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(
<<<<<<< HEAD
  `mongodb+srv://every-admin-eats:${key}@everyone-eats-gltav.mongodb.net/Businesses?retryWrites=true&w=majority`,
=======
  `mongodb+srv://${user}:${key}@everyone-eats-gltav.mongodb.net/${database}?retryWrites=true&w=majority`,
>>>>>>> 72772e9d84e2c086a8c50da82ec563d41b9b096c
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
