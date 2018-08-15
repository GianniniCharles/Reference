const express = require('express');
const app = express();


app.use("/", express.static('public'));

//localhost:3000/images/cat.jpg
//will serve the cat picture and we dont need to include the word
//public in the url

// our first Route
app.get('/', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/about-us', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/about-us.html');
});





app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });