var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, lowercase: true },
  age: { type: Number, min: 18, max: 30 },
  username: { type: String, lowercase: true },
  email: { type: String, lowercase: true, required: /@/ },
  password: { type: String, minlength: 5, maxlength: 15 },
  createdAt: { type: Date, default: Date.now },
});
