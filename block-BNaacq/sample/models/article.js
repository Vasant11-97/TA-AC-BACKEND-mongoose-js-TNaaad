var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, minlength: 10, maxlength: 50 },
    tags: { type: String },
    likes: { type: Number, default: 0 },
    author: { type: String },
    id: { type: Schema.Types.ObjectId },
    comment: { type: String, minlength: 10, maxlength: 100 },
  },
  { timestamps: true }
);

var Article = mongoose.Model('Article', articleSchema);

module.exports = Article;
