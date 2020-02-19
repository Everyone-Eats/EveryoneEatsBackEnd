<<<<<<< HEAD
const express = require('express');
=======
const express = require("express");
const cors = require("cors");
>>>>>>> 72772e9d84e2c086a8c50da82ec563d41b9b096c
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(cors());

app.use('/api', require('./api'));

module.exports = app;
