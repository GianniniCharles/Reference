const express     = require('express');
const router      = express.Router();
const Author      = require('../models/author');

router.get('/api/authors', (req, res, next)=>{
    Author.find()
    .then((allTheAuthors)=>{
       res.json(allTheAuthors);
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/authors', (req, res, next)=>{
    res.render('authorViews/authors')
})











module.exports = router;