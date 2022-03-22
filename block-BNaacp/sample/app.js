// Requires
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user');

// Connect to database

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

app.post('/users', (req, res) => {
  // Capture the data
  // console.log(req.body);
  // Save data in database
  User.create(req.body, (err, user) => {
    console.log(err, user);
  });
  // Send response
  res.send(req.body);
});

app.get('/find', (req, res) => {
  User.find((err, user) => {
    res.send(user);
  });
});

// Route for finding user from database.

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  // User.find({ _id:('62399a8e5eca681ea1a2c5b3') }, (err, users) => {
  //   res.json({ users: users });
  // });
  // User.findOne({ _id: '62399a8e5eca681ea1a2c5b3' }, (err, users) => {
  //   res.json({ users: users });
  // });

  User.findById(id, (err, users) => {
    res.json({ users: users });
  });
});

// Route for updating the user in database

app.put('/users/:id', (req, res, next) => {
  console.log(req.body);
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    res.json(updatedUser);
  });
});

// Route for deleting the user from database

app.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    res.send(`${deletedUser.name} User deleted...Jake dekh records mai🤪`);
  });
});
// error handlers middlewares

app.use((req, res, next) => {
  res.send('Page not found');
});

// Server

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
