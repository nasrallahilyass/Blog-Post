const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments')
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define Routes
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
