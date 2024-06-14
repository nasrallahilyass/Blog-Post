const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, deletePost, getPostBySlug } = require('../controllers/postsController');
const { upload } = require('../middlewares/multer');

router.get('/', getPosts);
router.post('/', upload, createPost);
router.get('/slug/:slug', getPostBySlug); // Ensure this is /slug/:slug
router.get('/:id', getPostById);
router.put('/:id', upload, updatePost);
router.delete('/:id', deletePost);

module.exports = router;
