const mongoose = require('mongoose');
const Schema = { mongoose };

const User = new Schema({
  type: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  geoLocation: {
    type: String,
    required: true
  },
  pointOfContact: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('User', User);
