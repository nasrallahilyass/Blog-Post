const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./prisma'); // Ensure this path is correct

dotenv.config();

console.log('Database URL:', process.env.DATABASE_URL);
console.log('Prisma Client initialized:', prisma);

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your Next.js app's URL
}));

const commentsRoutes = require('./routes/comments');
const categoriesRoutes = require('./routes/categories');

app.use('/api/comments', commentsRoutes);
app.use('/api/categories', categoriesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
