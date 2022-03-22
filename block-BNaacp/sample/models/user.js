var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Userschema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: /@/ },
    sports: [{ type: String }],
  },
  { timestamps: true }
);

var User = mongoose.model('User', Userschema);

module.exports = User;
