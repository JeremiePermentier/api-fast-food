const express = require('express');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes);

module.exports = app;