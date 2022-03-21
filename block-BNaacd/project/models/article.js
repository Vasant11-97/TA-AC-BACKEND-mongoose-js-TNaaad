var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  { timestamps: true }
);

var articleSchema = new Schema({
  name: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
});
