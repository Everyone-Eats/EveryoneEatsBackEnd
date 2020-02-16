const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  type: {
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
  position: {
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
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
  },
  score: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('User', User);
