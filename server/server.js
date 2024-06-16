const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const prisma = require("./utils/connect");

// Load environment variables from .env file
dotenv.config();

const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const categoryRoutes = require("./routes/categories");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin, like mobile apps or curl requests
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
      /^https:\/\/.*\.vercel\.app$/
    ];

    if (allowedOrigins.some((allowedOrigin) => 
      allowedOrigin instanceof RegExp ? allowedOrigin.test(origin) : allowedOrigin === origin
    )) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions));

// Use routes
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Ensure to disconnect Prisma client when exiting the process
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
