// REQUIRE MONGOOSE
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String,
})

var Book = mongoose.model("Book", BooksSchema);

module.exports = Book;