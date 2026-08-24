const express = require('express')
const app = express();
const createItem = require('./routers/items/route.create');

require('dotenv').config();
app.use(express.json());
app.use('/v1/items/',createItem);

module.exports = app;