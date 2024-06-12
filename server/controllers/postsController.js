const prisma = require('../utils/connect');
const slugify = require('../utils/slugify');

// Create a new post
exports.createPost = async (req, res) => {
  const { image, categoryId, title, description, userId } = req.body;
  const slug = slugify(title); 
  
  try {
    const post = await prisma.post.create({
      data: {
        image,
        title,
        slug,
        description,
        categoryId,
        userId,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error("Error during post creation:", error); // Log the error
    res.status(500).send('Server Error');
  }
};


// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        category: true,
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Get post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
      include: {
        category: true,
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
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
  const { image, categoryId, title, description, userId } = req.body;
  
  if (!title) {
    return res.status(400).send('Title is required');
  }

  const slug = slugify(title); // Generate slug from title
  
  try {
    const post = await prisma.post.update({
      where: { id: req.params.id },
      data: {
        image,
        title,
        slug,
        description,
        categoryId,
        userId,
      },
      include: {
        category: true,
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
    res.json({ msg: "Post Updated", post });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};


// Delete post
exports.deletePost = async (req, res) => {
  try {
    await prisma.post.delete({
      where: { id: req.params.id },
    });
    res.json({ msg: "Post Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
