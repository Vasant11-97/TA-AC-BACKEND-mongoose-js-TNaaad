var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});

var userSchema = new Schema({
  name: String,
  age: Number,
  favourites: [String],
  marks: [Number],
});
