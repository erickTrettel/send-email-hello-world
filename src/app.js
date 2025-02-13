const express = require('express');
const cors = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
