const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/cars-app');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

const carSchema = new Schema({
  make : String,
  model: String,
  color: String
});
const Car = mongoose.model('Car', carSchema);

app.get('/cars', (req, res, next)=>{
    Car.find()
    .then((listOfCars)=>{
    res.render('cars', {carsArray: listOfCars});
    })
    .catch((err)=>{
        res.send(err);
    })
})

app.get('/cars/:id', (req, res, next)=>{
    const theID = req.params.id;

    Car.findById(theID)
    .then((theCar)=>{
        res.render('singleCar', {car: theCar})
    })
    .catch((err)=>{
        res.send(err);
    })

});





app.get('/', (req, res, next)=>{
    res.render('index');
});

app.post('/car', (req, res, next)=>{
    res.send(req.body);
})


app.get('/users/:name', function (req, res, next) {
  res.send("hello, " + req.params.name);
})

app.get('/search', (req, res, next)=>{

    res.send(req.query);
});









app.listen(3000, () => console.log('Example app listening on port 3000!'))