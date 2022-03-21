var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

var article = mongoose.model('Article', articleSchema);

module.exports(article);
