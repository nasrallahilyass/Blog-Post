const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Routes
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments')
const authRoutes = require('./routes/auth')



const errorHandler = require('./middlewares/errorHandler');
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
app.use('/api/auth', authRoutes)


// Middleware to handle errors
app.use(errorHandler);

// Enable CORS for the Next.js frontend
app.use(cors({
    origin: 'http://localhost:3000' // replace with your Next.js app's URL
  }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
