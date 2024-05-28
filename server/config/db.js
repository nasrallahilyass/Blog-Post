const mongoose = require('mongoose');

//connect to MongoDB take two arguments, the URI and an object with options
//useNewUrlParser is used to parse the MongoDB connection string
//useUnifiedTopology is used to opt into using the new connection management engine
//this is the recommended way to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
