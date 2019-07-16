const futuramaRoutes = require('./routes/futurama');
const express = require('express');
const app = express();

app.use(express.json());
app.use(futuramaRoutes);

module.exports = app;
