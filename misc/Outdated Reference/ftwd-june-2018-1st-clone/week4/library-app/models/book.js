const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const bookSchema = new Schema({
  title: String,
  description: String,
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  rating: Number,
  //array of objects for reviews this is an embedded object. We can use reviews are unique
  reviews: [{reviewer: String, content: String}]
  //now going to views to add a file.
});

const Book = mongoose.model("Book", bookSchema);



module.exports = Book;