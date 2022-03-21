var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: /@/,
      minlength: 5,
      maxlength: 50,
      lowercase: true,
    },
    age: { type: Number, default: 0 },
    password: { type: String, min: 5 },
    createdAt: { type: Date, default: Date.now },
    id: Schema.Types.ObjectId,
    favourite: [{ type: String }],
  },
  { timestamps: true }
);
var user = mongoose.model('User', userSchema);
module.exports(user);
