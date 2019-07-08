
const Post = require("../models/post");

module.exports = {
  getAllPosts
};

function getAllPosts(req, res) {
  let posts = Post.getAllPosts();
  res.send(JSON.parse(posts));
}