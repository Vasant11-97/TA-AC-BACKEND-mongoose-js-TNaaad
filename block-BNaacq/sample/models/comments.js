var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String },
    id: { type: Schema.Types.ObjectId },
    article: { type: String },
  },
  { timestamps: true }
);

var Comment = mongoose.Model('Comment', commentSchema);

module.exports = Comment;
