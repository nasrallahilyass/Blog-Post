const express = require('express');
const router = express.Router();

const {createPost, getAllPosts, getPostById, updatePost, deletePost} = require('../controllers/postsController');

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


module.exports = router;