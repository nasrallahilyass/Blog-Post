const Post = require('../models/Post');
// const User = require('../models/User');


// get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name');
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// get post by id
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'name');
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}


// create a post
exports.createPost = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const post = new Post({ title, content, author });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// update a post
exports.updatePost = async (req, res) => {
    const { content } = req.body;
    try {
        let post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        post = await Post.findByIdAndUpdate(req.params.id, { title
            , content }, { new: true });
        res.json({msg: 'Post Updated'});
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// delete a post
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Post deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}