var express = require('express');
var router = express.Router();
var postCtrl = require("../controllers/posts");

/* GET posts listing. */
router.get('/posts', postCtrl.getAllPosts);
router.get('/posts/:id', postCtrl.getOnePost);
router.post('/posts', postCtrl.createPost);
router.delete('/posts/:id', postCtrl.deletePost);
router.put('/posts/:id', postCtrl.updatePost);

module.exports = router;
