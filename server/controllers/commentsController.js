const Comment = require('../models/Comment');

// Create a new comment
exports.createComment = async (req, res) => {
  const { content, authorId, postId } = req.body;
  try {
    const comment = new Comment({ content, authorId, postId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error during comment creation:", error); // Log the error
    res.status(500).send('Server Error');
  }
};

// Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('authorId').populate('postId');
    res.json(comments);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Get comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('authorId').populate('postId');
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

// Update comment
exports.updateComment = async (req, res) => {
  const { content } = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );
    res.json({ msg: "Comment Updated", comment });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete comment
exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ msg: "Comment Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
