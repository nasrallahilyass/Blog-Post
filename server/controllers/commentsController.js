const Comment = require('../models/Comment')



// create comment
exports.createComment = async (req, res) => {
    const {content, author, post} = req.body
    try {
        const comment = new Comment({content, author, post})
        await comment.save()
        res.status(201).json(comment)
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// get all the comment 
exports.getComment = async (req, res) => {
    try {
        const comments = await Comment.find().populate('author', 'name').populate('content')
        res.json(comments)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

//get comment by id
exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('author', 'name').populate('content')
        if(!comment){
            return res.status(404).json({msg : "Comment not found"})
        }
        res.json(comment)
    } catch (error) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }    
}

// update comment

exports.updateComment = async (req, res) => {
    try {
        const {content} = req.body;
        let comment = await Comment.findById(req.params.id);
        if (!comment) {
         return res.status(404).json({ msg: 'Comment not found' });
    }
        comment = await Comment.findByIdAndUpdate(req.params.id, { content }, { new: true });
        res.json({msg: 'Comment Updated'});
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}


// delete comment

exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({msg: 'Comment deleted'})
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}