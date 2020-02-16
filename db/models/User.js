const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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

module.exports = { User: mongoose.model("User", userSchema), userSchema };
