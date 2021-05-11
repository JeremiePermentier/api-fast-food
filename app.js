const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/img', express.static(path.join(__dirname, 'img')));
morgan('tiny');

module.exports = app;