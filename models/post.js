var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema(
  {
    title: String,
    author: String,
    post: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);