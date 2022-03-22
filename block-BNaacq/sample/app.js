var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/article');
var Comment = require('./models/comments');
var User = require('./models/user');

// Connecting to the database

mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);
// Initiate the appp

var app = express();

// Middlewares

app.use(express.json());

app.use(logger('dev'));

// Routes

app.get('/', (req, res) => {
  res.send('Welcome');
});
app.use((req, res, next) => {
  res.send('Page not found');
});

// Server

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
