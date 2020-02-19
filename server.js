const express = require('express');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(cors());

app.use('/api', require('./api'));

module.exports = app;
