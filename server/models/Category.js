const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    });

module.exports = mongoose.model("Category", CategorySchema);