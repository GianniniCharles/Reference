
const express = require('express');
const app     = express();
const hbs     = require('hbs');
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res , next)=>{
  punkAPI.getBeers()
  .then(blah => {
    // console.log(beers);
    
    
    res.render('beers', {beersArray:blah});
  })
});

app.get('/random-beer', (req, res, next)=>{
  punkAPI.getRandom()
  .then(beers => {
    
    res.render('randomBeer', {theBeer:beers[0]});
  })
});



app.listen(3000);