require("./connection");

const { User } = require("./models/User");
const Donation = require("./models/Donation");

const db = { User, Donation };

module.exports = db;
