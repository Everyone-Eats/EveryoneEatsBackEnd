const mongoose = require("mongoose");
const { Schema } = mongoose;
const { userSchema } = require("./User");

const Donation = new Schema({
  donor: { type: userSchema, required: true },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  costBasis: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true
  },
  date: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("Donation", Donation);
