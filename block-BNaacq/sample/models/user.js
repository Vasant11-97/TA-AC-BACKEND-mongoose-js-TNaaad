var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: /@/ },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

var User = mongoose.Model('User', userSchema);

module.exports = User;
