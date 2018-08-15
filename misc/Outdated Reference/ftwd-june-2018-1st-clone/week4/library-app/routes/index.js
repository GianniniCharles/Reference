const express = require('express');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  let data = {};
  if(req.session.currentUser){
    data = req.session.currentUser;
    }
  
  res.render('index', data.theUser);
});

module.exports = router;


