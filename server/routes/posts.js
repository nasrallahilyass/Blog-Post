const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postsController');

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
