const Post = require('../models/Post');
const slugify = require('../utils/slugify'); // Correctly import the slugify function

// Create a new post
exports.createPost = async (req, res) => {
  const { image, categoryId, title, description } = req.body;
  const slug = slugify(title); // Generate slug from title
  try {
    const post = new Post({
      image,
      title,
      slug,
      description,
      categoryId, // Ensure this references the correct category ID
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Error during post creation:", error); // Log the error
    res.status(500).send('Server Error');
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('categoryId');
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Get post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('categoryId');
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

// Update post
exports.updatePost = async (req, res) => {
  const { image, category, title, description } = req.body;
  const slug = slugify(title); // Generate slug from title
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { image, title, slug, description, categoryId: category },
      { new: true }
    );
    res.json({ msg: "Post Updated", post });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: "Post Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
