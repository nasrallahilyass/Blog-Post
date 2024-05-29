const express = require('express');
const router = express.Router();

const {createComment, getComment, getCommentById, updateComment, deleteComment} = require('../controllers/commentsController')


router.get('/', getComment)
router.post('/', createComment)
router.get('/:id', getCommentById )
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)



module.exports = router