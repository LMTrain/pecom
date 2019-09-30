const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  memberId: { type: String },
  bookId: { type: String },
  title: { type: String },
  authors: { type: String }, 
  link: {type: String,},
  thumbnail: {type: String },  
  description: { type: String},
  publisheddate: { type: String},
  request: { type: Boolean},
  request: { type: Boolean},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
