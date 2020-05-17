const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: String }],
    description: { type: String },
    image: { type: String }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;