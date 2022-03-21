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

var username = mongoose.model('Username', userSchema);

module.export(username);

var article = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, minlength: 50, maxlength: 200 },
  username: { type: String, id: Schema.Types.ObjectId },
  email: { type: String, required: /@/ },
  password: { type: String, minlength: 5, maxlength: 15 },
});

var article = mongoose.model('Article', article);

module.export(article);
