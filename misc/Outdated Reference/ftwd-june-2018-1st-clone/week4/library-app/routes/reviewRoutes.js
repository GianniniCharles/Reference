//Now we must import express and router

const express = require('express');
const reviewRouter = express.Router();

//after the bottom, we made this model
//we don't need to require mongoose because the models require mongoose
const Book = require('../models/book');

//CONVENTION: model is book, routes is books

//now we know to export, so at bottom,
//Creating a review is technically just editing a book db entry in a really fancy way.

//this route is actually /books/:id/reviews/new
 //req.body is what is in the body in a form.
  //req.params is the url 
reviewRouter.get('/books/:id/reviews/new', (req, res, next)=>{
  console.log('--------', req.params)
  Book.findById(req.params.id)
  .then((theBook)=>{ //theBook here is the return value of the find by. If you do find, you can put all the things
    res.render('addReview', {book: theBook})//var, value //the quotes are the absolute path in views/. 
    //you don't need curly braces for theBook because it is already an object
  })
.catch((daError)=>{//catch works like .then. Can put whatever you want. .then is actually one line but we split it so people can see.

})
});


reviewRouter.post('/books/:id/reviews/create',(req, res, next)=>{
  // const theReview = {reviewer: req.body.reviewer, content: req.body.content}
  const theReview = req.body
  
  
  Book.findByIdAndUpdate(req.params.id,{$push: {reviews: req.body}})

  .then((response)=>{
//DO NOT EVER RES RENDER ON A POST REQUEST. UNINTENDED LOOPING ACTION CONSEQUENCES
    res.redirect(`/books/${req.params.id}`)
  })
.catch((err)=>{
  next(err);
})

}); 
//1st arg, id, 2nd argument, what you wanna do so 1st arg is req.params.id,
// 2nd arg is the $push method
//need to push a new object into the reviews array


//deleting

reviewRouter.post('/books/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
  const bookID = req.params.id;
  const reviewIndex= req.params.reviewIndex;
  //we're not deleting: we're editing the book.
  //findByIDAndUpdate are good for normal things, but we'll mix mongoose with with JS.
  //We'll grab the whole book and do things.
  Book.findById(bookID)
  .then((theBookThatImEditing)=>{
    theBookThatImEditing.reviews.splice(reviewIndex, 1);


    theBookThatImEditing.save()
    .then(()=>{
      res.redirect('/books/'+bookID)
    })
    .catch((err)=>{
      next(err)
    })
  })
  .catch((err)=>{
    next(err);
  })


  console.log("AHAHAHAHAHAHAHAHAH!!!!!!!!!!!!!!");
  console.log(`The id# of the book for which you're trying to delete a review is ${req.params.id}`)
})









module.exports = reviewRouter;











// connect this to app js

