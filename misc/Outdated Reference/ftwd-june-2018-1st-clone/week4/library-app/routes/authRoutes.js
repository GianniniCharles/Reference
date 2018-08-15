const express       = require('express');
const userRouter    = express.Router();
const User          = require('../models/user');
const bcrypt        =require('bcryptjs');


userRouter.get('/signup', (req, res, next)=>{
  res.render('userViews/signupPage')
});

userRouter.post('/signup', (req, res, next)=>{
// DEFINE SALT INSIDE THE ROUTE SO EACH SALT IS UNIQUE
const thePassword = req.body.thePassword;
const theUsername = req.body.theUsername;

if(thePassword ===""||theUsername ===""){
  // errorMessage is a variable received from the signupPagehbs
  res.render('userViews/signupPage', {errorMessage: 'Please fill in both a username and password in order to create an account.'})
  return;
}
//this below is like find by id but takes one whole query.

User.findOne({username: theUsername})
.then((responseFromDB)=>{
  if (responseFromDB !==null){
    res.render('userViews/signupPage', {errorMessage: `Sorry, the username ${theUsername} is awesome, so you cant have it. Too late! Be a beta tester next time`});
    return;
    
  }


const salt     = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(thePassword, salt);

User.create({username: theUsername, password: hashedPassword})
.then((response)=>{
  res.redirect('/');

})
.catch((err)=>{
  next(err);
})
// req.body.thePassword

}) //ends the .then from the user.findOne
//for this work, we had to address the synchronisouty of it.
});//end the route.



userRouter.get('/login', (req, res, next)=>{
  res.render('userViews/loginPage');
})


userRouter.post('/login', (req, res, next)=>{
const theUsername = req.body.theUsername;
const thePassword = req.body.thePassword;

if (theUsername === "" || thePassword === "") {
  res.render("userViews/loginPage", {errorMessage: "Indicate a username and a password to sign up"});
  return;
}


//non promise syntax.
//if i did promise (.then, .catch here, I would need to res/render a different page each based on the situation)
User.findOne({ "username": theUsername }, (err, responseFromDBUser) => {
  if (err || !responseFromDBUser) {
    res.render("userViews/loginPage", {errorMessage: "That username doesn't exist"});
    return;
  }
  if (bcrypt.compareSync(thePassword, responseFromDBUser.password)) {
    // Save the login in the session!
    req.session.currentUser = responseFromDBUser; //the currentUser here is a placeholder
    res.redirect("/");
  } else {
    res.render("userViews/loginPage", {errorMessage: "Incorrect password"});
  }
});





});


userRouter.get("/logout", (req, res, next)=>{
  req.session.destroy((err)=>{
    //cannot access session here.
    res.redirect("/login");
  });
});




module.exports = userRouter;