const prisma = require('../utils/connect');

// Create a new comment
exports.createComment = async (req, res) => {
  const { content, authorId, postId } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: { content, authorId, postId },
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error during comment creation:", error);
    res.status(500).send('Server Error');
  }
};

// Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        author: true,
        post: true,
      },
    });
    res.json(comments);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Get comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.id },
      include: {
        author: true,
        post: true,
      },
    });
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
    const comment = await prisma.comment.update({
      where: { id: req.params.id },
      data: { content },
    });
    res.json({ msg: "Comment Updated", comment });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete comment
exports.deleteComment = async (req, res) => {
  try {
    await prisma.comment.delete({
      where: { id: req.params.id },
    });
    res.json({ msg: "Comment Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
